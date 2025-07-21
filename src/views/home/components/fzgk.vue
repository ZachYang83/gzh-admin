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
      <div class="right">
        <div class="item-total">
          {{ item.title }}
          <div class="item-total-count">
            {{ item.value }}
            <span class="item-total-unit">{{ item.unit }}</span>
          </div>
        </div>
        <div class="item-percent">
          <div class="percent-province">
            {{ item.percent1Text }}
            <span>{{ item.percent1Value }}</span>
            <svg-icon v-if="item.showArrow" icon-class="arrow-up" class="svg-icon" size="1rem" />
          </div>
          <div class="percent-country">
            {{ item.percent2Text }}
            <span>{{ item.percent2Value }}</span>
          </div>
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
  gap:5px;
  padding:4px;
  flex-direction: column;
  cursor: default;
  padding:2px;
}

.fzgk-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 440px;
  flex:1;
  margin: 2px 0;
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
}

.left {
  width: 90px;
  height: 100%;

  .item-logo {
    max-height: 85%;
    width: auto;
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
  

  .item-total {
    width: 190px;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    font-family: ALIBABAPUHUITI;
    color: rgba(212, 237, 253, 1);
  }
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
    font-size: 14px;
    font-weight: 400;
    gap: 5px;


    span {
      margin-left: 5px;
      text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
      font-size: 20px;
      font-weight: 500;
      display: flex;
      align-items: center;
    }

  }

}
</style>  
