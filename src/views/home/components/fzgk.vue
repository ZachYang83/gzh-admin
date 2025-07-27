<template>
  <div class="fzgk-card">
    <div 
      v-for="(item, index) in cardItems" 
      :key="index"
      class="fzgk-item"
    >
      <div class="left flex-center">
        <img :class="item.logoClass" :src="item.logoSrc" :alt="item.altText" />
      </div>
      <div class="middle">
          {{ item.title }}
          <div class="item-total-count">
            {{ item.value }}
            <span class="item-total-unit">{{ item.unit }}</span>
          </div>
        
      </div>
      <div class = "right">
          <div class="item-name">
            <span>{{ item.percent1Text }}</span>
            <span>{{ item.percent2Text }}</span>
            
          </div>
          <div class="item-percent">
            <span>{{ item.percent1Value }}<svg-icon v-if="item.showArrow" icon-class="arrow-up" class="svg-icon" size="1rem" /></span>
            <span>{{ item.percent2Value }}</span>
          </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const getImage = (imageName) => {
  return new URL(`../imgs/${imageName}`, import.meta.url).href;
};

const cardItems = ref([
  {
    logoSrc: getImage("fzgk-cygm.png"),
    logoClass: 'item-logo',
    altText: '产业规模',
    title: '广州人工智能产业规模',
    value: '1265',
    unit: '亿元',
    percent1Text: '占全省',
    percent1Value: '25%',
    percent2Text: '占全国',
    percent2Value: '7.8%',
    showArrow: false
  },
  {
    logoSrc: getImage("fzgk-zjz.png"),
    logoClass: 'item-logo',
    altText: '增加值',
    title: '2024年增加值',
    value: '588',
    unit: '亿元',
    percent1Text: '同比增加',
    percent1Value: '11.4%',
    percent2Text: '占GDP比重',
    percent2Value: '1.9%',
    showArrow: true
  },
  {
    logoSrc: getImage("gzgk-ssgm.png"),
    logoClass: 'item-logo',
    altText: '税收规模',
    title: '2024年税收规模',
    value: '66',
    unit: '亿元',
    percent1Text: '同比增加',
    percent1Value: '11%',
    percent2Text: '',
    percent2Value: '',
    showArrow: true
  }
]);

</script>

<style lang="scss" scoped>
// 样式保持不变
.fzgk-card {
  width: 100%;
  height: 100%;
  display: flex;
  gap:6px;
  padding:4px;
  flex-direction: column;
  cursor: default;
}

.fzgk-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 33%;
  background: linear-gradient(
    90.11deg,
    rgba(2, 62, 112, 1) 0%,
    rgba(2, 62, 112, 0) 100%
  );
  border-radius: 50px 0 0 50px;
  flex-direction: row;
  box-sizing: border-box;

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 0 1px rgba(8, 206, 224, 0.5),
      0 0 10px 5px rgba(8, 206, 224, 0.3);
  }
  padding: 5px 0;
}

.left {
  width: 90px;
  height: 100%;

  .item-logo {
    max-height: 85%;
    width: auto;
    max-width: 85%;
  }
}

.middle {
  height: 100%;
  width:43%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  color: #d8f0ff;
  font-size: 18px;
  .item-total-count {
    height: max-content;
    font-family: "YouSheBiaoTiYuan";
    text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
    font-size: 36px;
    font-weight: 400;
    display: flex;
    align-items: flex-end;
    gap: 15px;
  }

  .item-total-unit {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 5px;
  }
}

.right{
  flex:1;
  height: 100%;
  display: flex;
  flex-direction: row;
  
  .item-name {
    width: 40%;
    white-space: nowrap;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 14px;
    font-weight: 400;
    color: #d8f0ff;
    span{
      height: 20px;
    }
  }

  .item-percent {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
    color: #d8f0ff;
    span {
      margin-left: 5px;
      text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
      font-size: 20px;
      font-weight: 500;
      height: 20px;
      display: flex;
      align-items: center;

      svg-icon {
        margin-left: 5px;
      }
    }
  }

}
</style>  
