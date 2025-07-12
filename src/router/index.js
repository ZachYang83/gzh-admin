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
        path: "detail",
        component: () => import("@/views/scene-case/detail.vue"),
        name: "sceneDetail",
        file: "scene-case/detail.vue",
        meta: { title: "场景详情", icon: "iconfont icon-shiyongwendang mr-5" },
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
        path: "supplyList",
        component: () => import("@/views/supDemMatch/supplyList.vue"),
        name: "SupplyList",
        file: "supDemMatch/supplyList.vue",
        meta: { title: "供应列表", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "demandList",
        component: () => import("@/views/supDemMatch/demandList.vue"),
        name: "DemandList",
        file: "supDemMatch/demandList.vue",
        meta: { title: "需求列表", icon: "iconfont icon-shiyongwendang mr-5" },
      },
       {
        path: "supplyDetail",
        component: () => import("@/views/supDemMatch/supplyDetail.vue"),
        name: "SupplyDetail",
        file: "supDemMatch/supplyDetail.vue",
        meta: { title: "供应详情", icon: "iconfont icon-shiyongwendang mr-5" },
      },
      {
        path: "demandDetail",
        component: () => import("@/views/supDemMatch/demandDetail.vue"),
        name: "DemandDetail",
        file: "supDemMatch/demandDetail.vue",
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
        meta: { title: "供需对接", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
  {
    path: "/shenbao",
    component: LayoutDefault,
    redirect: "/shenbao/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/shenbao/index.vue"),
        name: "Shenbao",
        file: "shenbao/index.vue",
        meta: { title: "场景申报", icon: "iconfont icon-shiyongwendang mr-5" },
      },
    ],
  },
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
