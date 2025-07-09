<template>
  <div class="cj-wrap">
    <div class="main-title">
      <Tybtl title="千行百业应用场景全覆盖"></Tybtl>
    </div>
    <div class="main-content">
      <div class="figure-boards">
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-qbcj.png"
          count="236"
          title="全部场景"
          @click="goToDetail('/scene/table')"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-zzly.png"
          count="32"
          title="制造领域"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-ylly.png"
          count="48"
          title="医疗领域"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-jtly.png"
          count="25"
          title="交通领域"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-cszl.png"
          count="34"
          title="城市治理"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-jyly.png"
          count="12"
          title="教育领域"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-zwfw.png"
          count="21"
          title="政务服务"
        ></Figureboard>
        <div class="separator"></div>
        <Figureboard
          img_src="src/views/scene-case/imgs/icon-qtly.png"
          count="64"
          title="其他领域"
        ></Figureboard>
      </div>
      <div class="cj-list-boards"></div>
    </div>
  </div>
</template>

<script setup>
import Figureboard from "./components/figure-board.vue";
import common from "common";
const { toPage } = common();

const goToDetail = (path) => {
  toPage(path);
};
</script>

<style lang="scss" scoped>
.cj-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-title {
  width: 100%;
  height: 80px;
}
.main-content {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.figure-boards {
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.cj-list-boards {
  width: 100%;
  height: 80%;
  background: #4e35be;
  display: flex;
  flex-direction: column;
}

.separator {
  width: 2.6vw;
  height: 0.5vh;
  border-radius: 0.25vh;
  background: #ff8d1a;
}
</style>
