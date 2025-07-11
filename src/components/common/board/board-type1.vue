<template>
   <div class = "board-wrap">
      <div class = "title">{{ title }}</div>
      <div class = "main-content">
        <div class = "left">
            <img src="@/assets/images/bg-detail-board.png" alt="背景图" class="bg-image" v-if = "ifimg">
        </div>
        <div class = "right">
            <div class = "line1">{{ key1 }}:{{ value1 }}</div>
            <div class = "line2">{{ key2 }}:<span>{{ value2 }}</span></div>
            <div class = "line3">{{ key3 }}:{{ value3 }}</div>
        </div>
      </div>
   </div>
</template>

<script setup name="BoardType1">
const props = defineProps({
  ifimg: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: "标题"
  },
  key1: {
    type: String,
    default: "关键字1"
  },
  value1: {
    type: String,
    default: "值1"
  },
  key2: {
    type: String,
    default: "关键字2"
  },
  value2: {
    type: String,
    default: "值2"
  },
  key3: {
    type: String,
    default: "关键字3"
  },
  value3: {
    type: String,
    default: "值3"
  }
});


</script>

<style lang = "scss" scoped>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("@/assets/font/YouSheBiaoTiHei.ttf");
}
.board-wrap{
  width:100%;
  height: 100%;
  display: flex; 
  background-color: rgb(255, 145, 0);
}



</style>