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
const { toPage } = common();
const getImage = (imageName) => {
  return new URL(`../imgs/${imageName}`, import.meta.url).href;
};

const cardList = ref([
  {
    path: "/scene",
    imgSrc: getImage("zttj-cj.png"),
    alt: "场景图标",
    count: 129,
    name: "场景",
  },
  {
    path: "/app",
    imgSrc: getImage("zttj-yypt.png"),
    alt: "应用平台图标",
    count: 125,
    name: "应用平台",
  },
  {
    path: "/algorithm",
    imgSrc: getImage("zttj-sf.png"),
    alt: "算法",
    count: 471,
    name: "算法",
  },
  {
    path: "/supDemMatch",
    imgSrc: getImage("zttj-gxdj.png"),
    alt: "供需对接",
    count: 235,
    name: "供需对接",
  },
  {
    path: "/revTask",
    imgSrc: getImage("zttj-bd.png"),
    alt: "榜单",
    count: 6,
    name: "榜单",
  },
]);

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
  transition: transform 0.3s ease;

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
