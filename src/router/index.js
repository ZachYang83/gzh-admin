import LayoutDefault from "@/layout/default/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 静态路由
 */
export const constantRoutes = [
  {
    path: "/404",
    name: "Err404",
    hidden: true,
    file: "error-page/404.vue",
    component: () => import("@/views/error-page/404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    file: "login/index.vue",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    component: LayoutDefault,
    redirect: "/home",
    file: "home/index.vue",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页", icon: "iconfont icon-map-b-o mr-5" },
      },
    ],
  },
  {
    path: "/app",
    component: LayoutDefault,
    redirect: "/app/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/app-plat/index.vue"),
        name: "App",
        file: "app-plat/index.vue",
        meta: { title: "应用平台", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "productDetail",
        component: () => import("@/views/app-plat/productDetail.vue"),
        name: "ProductDetail",
        file: "app-plat/productDetail.vue",
        meta: { title: "终端产品详情", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
  {
    path: "/scene",
    component: LayoutDefault,
    redirect: "/scene/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/scene-case/index.vue"),
        name: "Scene",
        file: "scene-case/index.vue",
        meta: { title: "场景案例", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "index2",
        component: () => import("@/views/scene-case/index2.vue"),
        name: "Scene2",
        file: "scene-case/index2.vue",
        meta: { title: "场景案例-国资", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "table",
        component: () => import("@/views/scene-case/table.vue"),
        name: "scenceTable",
        file: "scene-case/table.vue",
        meta: { title: "场景列表", icon: "iconfont icon-shiyongwendang mr-5" },
        props(route){
          return route.query
        }
      },
      {
        path: "table2",
        component: () => import("@/views/scene-case/table2.vue"),
        name: "scenceTable2",
        file: "scene-case/table2.vue",
        meta: { title: "场景列表-国资", icon: "iconfont icon-shiyongwendang mr-5" },
        props(route){
          return route.query
        }
      },
      {
        path: "detail",
        component: () => import("@/views/scene-case/detail.vue"),
        name: "sceneDetail",
        file: "scene-case/detail.vue",
        meta: { title: "场景详情", icon: "iconfont icon-shiyongwendang mr-5" },
        props(route){
          return route.query
        }
      },
      {
        path: "detail2",
        component: () => import("@/views/scene-case/detail2.vue"),
        name: "sceneDetail2",
        file: "scene-case/detail2.vue",
        meta: { title: "场景详情2", icon: "iconfont icon-shiyongwendang mr-5" },
        props(route){
          return route.query
        }
      },
    ],
  },
  {
    path: "/algorithm",
    component: LayoutDefault,
    redirect: "/algorithm/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/algorithm/index.vue"),
        name: "Algorithm",
        file: "algorithm/index.vue",
        meta: { title: "算法超市", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "detail",
        component: () => import("@/views/algorithm/detail.vue"),
        name: "algDetail",
        file: "algorithm/detail.vue",
        meta: { title: "算法详情", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
  {
    path: "/supDemMatch",
    component: LayoutDefault,
    redirect: "/supDemMatch/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/supDemMatch/index.vue"),
        name: "SupDemMatch",
        file: "supDemMatch/index.vue",
        meta: { title: "供需对接", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "supTable",
        component: () => import("@/views/supDemMatch/supTable.vue"),
        name: "supTable",
        file: "supDemMatch/supTable.vue",
        meta: { title: "供应超市", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "demTable",
        component: () => import("@/views/supDemMatch/demTable.vue"),
        name: "demTable",
        file: "supDemMatch/demTable.vue",
        meta: { title: "需求广场", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "supDetail",
        component: () => import("@/views/supDemMatch/supDetail.vue"),
        name: "supDetail",
        file: "supDemMatch/supDetail.vue",
        meta: { title: "供应详情", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "demDetail",
        component: () => import("@/views/supDemMatch/demDetail.vue"),
        name: "demDetail",
        file: "supDemMatch/demDetail.vue",
        meta: { title: "需求详情", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
  {
    path: "/revTask",
    component: LayoutDefault,
    redirect: "/revTask/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/revTask/index.vue"),
        name: "RevTask",
        file: "revTask/index.vue",
        meta: { title: "榜单列表", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "detail",
        component: () => import("@/views/revTask/detail.vue"),
        name: "taskDetail",
        file: "revTask/detail.vue",
        meta: { title: "任务详情", icon: "iconfont icon-shiyongwendang mr-5"},
      }
    ],
  },
  {
    path: "/submit",
    component: LayoutDefault,
    redirect: "/submit/scene",
    children: [
      {
        path: "scene",
        component: () => import("@/views/sceneSubmit/index.vue"),
        name: "SceneSubmit",
        file: "sceneSubmit/index.vue",
        meta: { title: "场景申报", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "flat",
        component: () => import("@/views/flatSubmit/index.vue"),
        name: "FlatSubmit",
        file: "flatSubmit/index.vue",
        meta: { title: "人才公寓申请", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
  {
    path: "/talent",
    component: LayoutDefault,
    redirect: "/talent/index",
    children: [
       {
        path: "index",
        component: () => import("@/views/talent/index.vue"),
        name: "Talent",
        file: "talent/index.vue",
        meta: { title: "专家人才", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ]
  },
  {
    path: "/policy",
    component: LayoutDefault,
    redirect: "/policy/index",
    children: [
       {
        path: "index",
        component: () => import("@/views/policy/index.vue"),
        name: "Policy",
        file: "policy/index.vue",
        meta: { title: "政策助手", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ]
  },
  {
    path: "/ai",
    component: LayoutDefault,
    redirect: "/ai/index",
    children: [
       {
        path: "index",
        component: () => import("@/views/ai/index.vue"),
        name: "AiIndex",
        file: "ai/index.vue",
        meta: { title: "AI首页", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ]
  }
];

/**
 * 动态路由
 */
export const asyncRoutes = [];
const routesModules = import.meta.globEager("./modules/*.js");
Object.keys(routesModules).forEach((modulePath) => {
  asyncRoutes.push(...routesModules[modulePath].default);
});

/**
 * 初始化路由
 */

export const initRouter = () =>
  createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes],
  });

let router = initRouter();

/**
 * 重置路由
 * Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
  router = initRouter();
}

export default router;
