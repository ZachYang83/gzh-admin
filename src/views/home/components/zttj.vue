<template>
  <div class="zttj-card">
    <div
      v-for="item in cardList"
      :key="item.path"
      class="zztj-item"
      @click="goToPage(item.path)"
    >
      <div class="left">
        <img class="item-logo" :src="item.imgSrc" :alt="item.alt" />
      </div>
      <div class="right">
        <div class="right-figure">{{ item.count }}</div>
        <div class="right-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import common from "common";
import { onMounted } from "vue";
import API from "@/api/home/index.js"
const { toPage } = common();
const getImage = (imageName) => {
  return new URL(`../imgs/${imageName}`, import.meta.url).href;
};

const counts = reactive({
  "cases": 0,
  "products": 0,
  "scenes": 0,
  "sup_dem": 0,
  "model_market": 0,
  "experts": 0
})

const cardList = computed(() =>{
  return [
  {
    path: "/scene",
    imgSrc: getImage("zttj-cj.png"),
    alt: "示范案例案例",
    count: counts.cases,
    name: "示范案例",
  },
  {
    path: "/app",
    imgSrc: getImage("zttj-yypt.png"),
    alt: "终端产品图标",
    count: counts.products,
    name: "终端产品",
  },
  {
    path: "/openScene",
    imgSrc: getImage("zttj-sf.png"),
    alt: "场景开放图标",
    count: counts.scenes,
    name: "场景开放",
  },
  {
    path: "/supDemMatch",
    imgSrc: getImage("zttj-gxdj.png"),
    alt: "供需对接图标",
    count: counts.sup_dem,
    name: "供需对接",
  },
  {
    path: "/algorithm",
    imgSrc: getImage("zttj-bd.png"),
    alt: "智算超市图标",
    count: counts.model_market,
    name: "智算超市",
  },
  {
    path: "/policy",
    imgSrc: getImage("zttj-expert.png"),
    alt: "人才图标",
    count: counts.experts,
    name: "专家人才",
  }
];});

onMounted(() => {
  API.getAll().then((res) =>{
    let resData = res.data;
    Object.assign(counts, resData)
  })
});


const goToPage = (path) => {
  // 使用路由跳转到指定页面
  toPage(path);
};
</script>

<style lang="scss" scoped>
.zttj-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.zztj-item {
  width: 33.333%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  .left {
    width: 60%;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .right {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .right-figure {
      font-size: 28px;
      background: linear-gradient(to bottom, white, #b2ebff, #0dcaf0);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-family: "YouSheBiaoTiYuan", sans-serif;
    }
    .right-name {
      text-shadow: 0px 0px 9px rgba(30, 198, 255, 0.8);
      font-size: 14px;
    }
  }
}

.percent-province {
  display: flex;
  align-items: center;
}
</style>
