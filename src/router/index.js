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
    meta: { title: "404", icon: "", keepAlive: false },
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    file: "login/index.vue",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      icon: "iconfont icon-map-b-o mr-5",
      keepAlive: false,
    },
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
        meta: {
          title: "首页",
          icon: "iconfont icon-map-b-o mr-5",
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: "/product",
    component: LayoutDefault,
    redirect: "/product/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/product/index.vue"),
        name: "App",
        file: "product/index.vue",
        meta: {
          title: "终端产品",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
      {
        path: "productDetail",
        component: () => import("@/views/product/productDetail.vue"),
        name: "ProductDetail",
        file: "product/productDetail.vue",
        meta: {
          title: "终端产品详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
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
        meta: {
          title: "示范案例",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
      {
        path: "table",
        component: () => import("@/views/scene-case/table.vue"),
        name: "sceneTable",
        file: "scene-case/table.vue",
        meta: {
          title: "案例列表",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
        props(route) {
          return route.query;
        },
      },
      {
        path: "detail",
        component: () => import("@/views/scene-case/detail.vue"),
        name: "sceneDetail",
        file: "scene-case/detail.vue",
        meta: {
          title: "案例详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
        props(route) {
          return route.query;
        },
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
        meta: {
          title: "算法超市",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "detail",
        component: () => import("@/views/algorithm/detail.vue"),
        name: "algDetail",
        file: "algorithm/detail.vue",
        meta: {
          title: "算法详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
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
        meta: {
          title: "供需对接",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
      {
        path: "supTable",
        component: () => import("@/views/supDemMatch/supTable.vue"),
        name: "supTable",
        file: "supDemMatch/supTable.vue",
        meta: {
          title: "供应超市",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "demTable",
        component: () => import("@/views/supDemMatch/demTable.vue"),
        name: "demTable",
        file: "supDemMatch/demTable.vue",
        meta: {
          title: "需求广场",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "supDetail",
        component: () => import("@/views/supDemMatch/supDetail.vue"),
        name: "supDetail",
        file: "supDemMatch/supDetail.vue",
        meta: {
          title: "供应详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
      {
        path: "demDetail",
        component: () => import("@/views/supDemMatch/demDetail.vue"),
        name: "demDetail",
        file: "supDemMatch/demDetail.vue",
        meta: {
          title: "需求详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: "/openScene",
    component: LayoutDefault,
    redirect: "/openScene/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/openScene/index.vue"),
        name: "openScene",
        file: "openScene/index.vue",
        meta: {
          title: "榜单列表",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "detail",
        component: () => import("@/views/openScene/detail.vue"),
        name: "taskDetail",
        file: "openScene/detail.vue",
        meta: {
          title: "任务详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
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
        meta: {
          title: "场景申报",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "flat",
        component: () => import("@/views/flatSubmit/index.vue"),
        name: "FlatSubmit",
        file: "flatSubmit/index.vue",
        meta: {
          title: "人才公寓申请",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/expert",
    component: LayoutDefault,
    redirect: "/expert/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/expert/index.vue"),
        name: "Expert",
        file: "expert/index.vue",
        meta: {
          title: "专家人才",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: true,
        },
      },
      {
        path: "detail",
        component: () => import("@/views/expert/detail.vue"),
        name: "ExpertDetail",
        file: "expert/detail.vue",
        meta: {
          title: "专家详情",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
    ],
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
        meta: {
          title: "政策助手",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
      },
    ],
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
        meta: {
          title: "AI首页",
          icon: "iconfont icon-shiyongwendang mr-5",
          keepAlive: false,
        },
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
