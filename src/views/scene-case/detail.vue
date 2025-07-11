<template>
<h1>场景详情{{ id }}</h1>
</template>

<script setup>
import Api from "@/api/scene/index.js";
const props = defineProps(['id'])

onMounted(() => {
  // 根据id获取场景
  Api.getCaseById({'id':props.id}).then((res) => {
    let resData = res.data;
    console.log(resData,'res');
  });
});
</script>

<style lang="scss" scoped>

</style>
