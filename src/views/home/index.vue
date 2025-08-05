<template>
  <div class="sy-wrap">
    <div class="sy-left-wrap">
      <div class="left-top flex-center">
        <flexBox title="发展概况">
          <template #content>
            <Fzgk></Fzgk>
          </template>
        </flexBox>
      </div>
      <div class="left-bottom flex-center">
        <flexBox title="头部企业">
          <template #content><Tbqy></Tbqy></template>
        </flexBox>
      </div>
    </div>
    <div class="sy-center-wrap">
      <div class="center-top">
        <Xctg></Xctg>
      </div>
      <div class="center-bottom" :style="{ height: isAICardUnfolded ? '99%' : '33%' }">
        <flexBox title="AI助手" >
          <template #more><div class="more-info flex-center"><svg-icon icon-class="arrow-back" :style = "{transform: isAICardUnfolded ? 'rotate(270deg) scale(2.5)' : 'rotate(90deg) scale(2.5)'}" @click = unfoldAICard()></svg-icon></div></template>
          <template #content><Aizs v-model:isUnfolded = "isAICardUnfolded"></Aizs></template>
        </flexBox>
      </div>
    </div>
    <div class="sy-right-wrap">
      <div class="right1 flex-center">
        <flexBox title="产业规模">
          <template #content><Cygm></Cygm></template>
        </flexBox>
      </div>
      <div class="right2 flex-center">
        <flexBox title="载体推介">
          <template #content><Zttj></Zttj></template>
        </flexBox>
      </div>
      <div class="right3 flex-center">
        <!-- <Cjsb></Cjsb> -->
        <div class="submit-box flex-center">
          <div class="scene-submit" @click="goToSence"></div>
        </div>
        <div class="submit-box flex-center">
          <div class="flat-submit" @click="goToFlat"></div>
        </div>
      </div>
      <div class="right4 flex-center">
        <flexBox title="宣传视频">
          <template #content><Xcsp></Xcsp></template>
        </flexBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import Fzgk from "./components/fzgk.vue";
import Zttj from "./components/zttj.vue";
import Xcsp from "./components/xcsp.vue";
import Aizs from "./components/aizs.vue";
import Cjsb from "./components/cjsb.vue";
import Cygm from "./components/cygm.vue";
import Tbqy from "./components/tbqy.vue";
import Xctg from "./components/xctg.vue";
import common from "common";
const { toPage } = common();
const isAICardUnfolded = ref(false);
const goToSence = () => {
  toPage("/submit/scene");
};
const goToFlat = () => {
  toPage("/submit/flat");
};

const unfoldAICard = () =>{
  isAICardUnfolded.value = !isAICardUnfolded.value;
}
</script>

<style lang="scss" scoped>
.sy-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.sy-left-wrap,
.sy-right-wrap {
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  position: relative;
}

.sy-center-wrap {
  flex:1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.left-top {
  width: 100%;
  // height: 300px;
  flex: 1;
  padding: 4px 10px;
  box-sizing: border-box;
}

.left-bottom {
  width: 100%;
  flex: 2;
  padding: 4px 10px;
  box-sizing: border-box;
}

.right1 {
  width: 100%;
  // height: 288px;
  flex:2.5;
  padding: 4px 10px;
  box-sizing: border-box;
  position: relative;
}

.right2 {
  width: 100%;
  // height: 222px;
  flex:2.5;
  padding: 4px 10px;
  box-sizing: border-box;
  position: relative;
}

.right3 {
  display: flex;
  gap: 10px;
  width: 100%;
  // height: 138px;
  flex: 1;
  padding: 4px 10px;
  box-sizing: border-box;
  position: relative;
}

.right4 {
  width: 100%;
  // height: 280px;
  flex:3;
  padding: 4px 10px;
  box-sizing: border-box;
  position: relative;
}

.center-top {
  // height: 660px;
  height: 65%;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 10px;
}

.center-bottom {
  width: 100%;
  height: 33%;//33
  position: absolute;
  bottom: 0;
  z-index: 1;
  // height: 315px;
  box-sizing: border-box;
  margin: 4px 10px;
  transition: all 0.3s ease;
}

.card-body {
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid rgba(42, 130, 228, 0.3);
  background: rgba(48, 97, 219, 0.12);
  box-sizing: border-box;
}

.submit-box {
  flex:1;
  height: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid rgba(42, 130, 228, 0.3);
  background: rgba(48, 97, 219, 0.12);
  box-sizing: border-box;
}

.scene-submit {
  width: 200px;
  height: 90px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("./imgs/scene-submit.png");
  background-position: center center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
}

.flat-submit {
  width: 200px;
  height: 90px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("./imgs/flat-submit.png");
  background-position: center center;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.02, 1.03);
  }
}
</style>
