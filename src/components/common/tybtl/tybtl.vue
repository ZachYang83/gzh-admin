<template>
   <div class = "bt-wrap">
        <div class = "back-icon" v-if="!isHome">
            <svg-icon icon-class="arrow-back" class="svg-icon" size="60%" @click="$router.back()" />
        </div>
        <div class = "title-text">
            <span>{{ title }}</span>
        </div>
   </div>
</template>

<script>
export default {
  name: "tybtl",
  props: {
    title: {
      type: String,
      default: "页面标题",
    },
    isHome: {
      type: Boolean,
      default: false,
    },
  },
};


</script>

<style lang = "scss" scoped>
  @font-face {
    font-family: ALIBABAPUHUITI;
    src: url("@/assets/font/ALIBABAPUHUITI.TTF");
  }
  .bt-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
      color: #D8F0FF;
      font-family: ALIBABAPUHUITI;
  }

</style>