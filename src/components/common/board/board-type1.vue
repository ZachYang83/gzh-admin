<template>
   <div class = "board-wrap">
      <div class = "title">{{ title }}</div>
      <div class = "main-content">
        <div class = "left">
            <img src="@assets/images/bg-detail-board.png" alt="背景图" class="bg-image">
        </div>
        <div class = "right">
            <div class = "line1">{{ key1 }}:{{ value1 }}</div>
            <div class = "line2">{{ key2 }}:<span>{{ value2 }}</span></div>
            <div class = "line3">{{ key3 }}:{{ value3 }}</div>
        </div>
      </div>
   </div>
</template>

<script setup>



</script>

<style lang = "scss" scoped>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("@/assets/font/YouSheBiaoTiHei.ttf");
}




</style>