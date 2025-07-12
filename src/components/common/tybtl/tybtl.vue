<template>
  <div class="bt-wrap">
    <div class="back-icon">
      <svg-icon
        icon-class="arrow-back"
        class="svg-icon"
        size="3em"
        @click="goBack()"
        v-if="!isHome"
      />
    </div>
    <div class="title-text">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    default: "页面标题",
  },
  isHome: {
    type: Boolean,
    default: false,
  },
});

const goBack = () => {
  router.back();
  // router.push({ name: 'Scene' })
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: ALIBABAPUHUITI;
  src: url("@/assets/font/ALIBABAPUHUITI.TTF");
}
.bt-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.back-icon {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-text {
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 36px;
  color: #d8f0ff;
  font-family: ALIBABAPUHUITI;
}
</style>
