#创建自定义网络

docker network create gzh_network

#启动mysql容器
docker run -d -p 3306:3306 \
--network gzh_network \
--name mysql \
-v /app/myconf:/etc/mysql/conf.d \
-v /app/mydata:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
mysql:8.0.37-debian

#后端镜像
FROM openjdk:8-jdk-alpine

LABEL authors="Zach Yang"

WORKDIR /app

# 将构建好的 JAR 文件复制到容器中
COPY gzh-server-1.0-20250723.jar /app.jar

# 暴露 Spring Boot 应用监听的端口（假设你的应用监听 8080 端口）
EXPOSE 9696

# 设置容器启动时执行的命令，运行 Spring Boot 应用
ENTRYPOINT ["java","-jar","/app.jar"]

#构建后端镜像
docker build -f Dockerfile -t gzh_server:v1.0

#后端容器启动
docker run -d -p 9696:9696 \
--network gzh_network \
--name gzh_server \
gzh_server:v1.0

# 前端镜像
# 使用官方Nginx镜像作为基础镜像
FROM nginx:1.28.0-alpine

# 移除默认的Nginx配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 将自定义的Nginx配置文件复制到容器中
COPY nginx.conf /etc/nginx/conf.d/

# 将打包好的Vue3应用文件复制到Nginx的静态文件目录
COPY gzh/ /gzh/

# 暴露容器的8686端口
EXPOSE 8686

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]

#构建前端镜像
docker build -f Dockerfile -t gzh_admin:v1.0


# nginx.conf 配置文件
server {
    listen       8686;
    server_name  localhost;
    root   /gzh;  # 容器内前端文件目录
    index  index.html;

    # API请求代理到后端服务器
    location = /api {
        proxy_pass http://gzh_server:9696;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 处理所有以/api/开头的请求
    location ^~ /api/ {
        proxy_pass http://gzh_server:9696/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}