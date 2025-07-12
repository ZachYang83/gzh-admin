<template>
   <div class = "board-wrap">
    <div class = "inner-wrap">
      <div class = "title" @click = "goToDetail(id)">{{ title }}</div>
      <div class = "main-content">
        <div class = "left">
            <img src="@/assets/images/bg-2.jpg" alt="背景图" class="bg-image" v-if = "ifimg">
        </div>
        <div class = "right">
          <div class = "line1">{{ key1 }}：<span>{{ value1 }}</span></div>
          <div class = "line2">{{ key2 }}：<span>{{ value2 }}</span></div>
          <div class = "line3">{{ key3 }}：<span>{{ value3 }}</span></div>
        </div>
      </div>
    </div>
   </div>
</template>

<script setup name="BoardType1">
import { id } from 'element-plus/lib/locale/index.js';

const props = defineProps({
  ifimg: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: "这是应用场景的标题"
  },
  id: {
    type: String,
    default: "0"
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
    default: "值3水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水"
  }
});


</script>

<style lang = "scss" scoped>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url("@/assets/font/YouSheBiaoTiHei.ttf");
}
.board-wrap{
  width:33.33%;
  height: 33.33%;
  padding:0.5%;
}

.inner-wrap {
  width: 100%;
  height: 100%;
  padding:2% 4%;
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/images/bg-detail-board.png');
  background-size: 100% 100%;
}
.title{
  font-family: YouSheBiaoTiHei;
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.main-content {
  width: 100%;
  height: calc(100% - 30px);
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.left {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
}
.right{
    width:70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:0.5rem;
  }

  .line2 > span{
    background: linear-gradient(40deg, #2B87FF, #2BCAFF);
    padding:0.2rem 0.5rem;
    border-radius: 4px;
  }
  .line3{
    text-overflow: ellipsis;
  }
</style>