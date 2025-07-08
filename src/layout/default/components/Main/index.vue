<template>
  <div
    id="appMain"
    class="app-main"
  >
  <router-view></router-view>
  </div>
</template>

<script setup>
// 通用方法
import common from "common";
import { RouterView } from "vue-router";
const { pageLoading, store } = common();
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
  padding-top:5px;
}
</style>
