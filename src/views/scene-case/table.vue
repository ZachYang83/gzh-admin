<template>
<h1  @click="goToDetail('/scene/detail')">场景列表</h1>
</template>

<script setup>
import common from "common";
const { toPage } = common();

const goToDetail = (path) => {
  toPage(path);
};
</script>

<style lang="scss" scoped>

</style>
