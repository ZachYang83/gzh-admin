<template>
  <div class="wrapper">
    <div v-if="true" class="header-wrap">
      <AppHeader />
    </div>
    <div class="content-wrap">
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { AppMain, AppHeader } from "./components/index.js";

const store = useStore();
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  height: 100%;
  color: #fff;
  background: #122638;
}

.header-wrap {
  width: 100%;
  height: $header-height;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/header-bg.png");
  background-position: center top;
}

.content-wrap {
  display: flex;
  width: 100%;
  height: calc(100% - $header-height);
  overflow: hidden;
}
</style>
