<template>
  <div id="appMain" class="app-main">
    <!-- <router-view></router-view> -->
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <keep-alive :include="cachedRoutes">
          <component :is="Component" />
        </keep-alive>
        <!-- <component v-else :is="Component" /> -->
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// 通用方法
import common from "common";
import { RouterView } from "vue-router";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const cachedRoutes = ref([]);
onMounted(() => {
  // 从路由配置中收集所有 keepAlive 为 true 的路由名称
  const allRoutes = router.getRoutes();
  cachedRoutes.value = allRoutes
    .filter((route) => route.meta?.keepAlive === true)
    .map((route) => route.name);
});
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
  padding-top: 5px;
}
</style>
