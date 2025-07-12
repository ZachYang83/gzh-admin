import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import settings from "./src/settings";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { viteMockServe } from "vite-plugin-mock";
import px2viewport from "postcss-px-to-viewport";

const port = settings.webPort;

// 获取打包文件
// function getOutputDir() {
//     let dir = "gzhAdmin";

//     switch (process.env.VITE_APP_ENV) {
//         case "test":
//             dir = "gzhAdminTest";
//             break;
//         case "release":
//             dir = "gzhAdminRelease";
//             break;
//     }

//     return dir;
// }

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "./" : "/",
    build: {
      outDir: "dist",
      // 修改打包块限制大小
      chunkSizeWarningLimit: 10000,
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
        imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
        // dirs: ['src/components/*'],
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        mockPath: "./src/mock", // mock地址
        supportTs: false, // 如果使用 js发开，则需要配置 supportTs 为 false
        watchFiles: true, // 监视文件更改
        prodEnabled: process.env.USE_MOCK,
        // mock生产环境配置
        injectCode: `
                    import { setupProdMockServer } from "./mock/mock-server.js";
                    setupProdMockServer();
                `,
      }),
    ],
    // 引入第三方的配置
    optimizeDeps: {
      include: ["element-plus/lib/locale/lang/zh-cn"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    server: {
      hmr: { overlay: false },
      // 使用IP启动项目
      host: "0.0.0.0",
      // 配置启用的端口号
      port,
      // 是否开启https
      https: false,
      proxy:{
        "/scene":{
          target: "http://192.168.28.244:9696",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/enterprise/, "/enterprise"),
        },
        "/supDemMatch":{
          target: "http://192.168.28.244:9696",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/enterprise/, "/enterprise"),
        },
        "/product":{
          target: "http://192.168.28.244:9696",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/enterprise/, "/enterprise"),
        },
      }
    },
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
        api: `${path.resolve(__dirname, "src")}/api`,
        mock: `${path.resolve(__dirname, "src")}/mock`,
        assets: `${path.resolve(__dirname, "src")}/assets`,
        common: `${path.resolve(__dirname, "src")}/common`,
        components: `${path.resolve(__dirname, "src")}/components`,
        views: `${path.resolve(__dirname, "src")}/views`,
        utils: `${path.resolve(__dirname, "src")}/utils`,
        router: `${path.resolve(__dirname, "src")}/router`,
        // config: `${path.resolve(__dirname, "src")}/config`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
      postcss: {
        plugins: [
          px2viewport({
            unitToConvert: "px",
            viewportWidth: 1920,
            viewportHeight: 1080, 
            unitPrecision: 3,
            viewportUnit: "vw",
            // exclude: /node_modules\/vant/i,
          }),
        ],
      },
    },
  };
});
