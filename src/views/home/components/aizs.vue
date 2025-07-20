<template>
  <div class="aizs-wrap">
    <div class="ai-title flex-center">
      <div class="ai-logo"></div>
      <span>AI智能 一键触达</span>
    </div>
    <div class="ai-input flex-center">
      <el-input
        v-model="textarea"
        style="width: 100%"
        :rows="3"
        type="textarea"
        clearable
        placeholder="请输入您的问题，小智为您解答"
      />
      <div class="send-btn flex-center" @click="aiFunction()">
        <img src="../imgs/send-btn.png" alt="发送" />
        发送
      </div>
    </div>
    <div class="ai-function">
      <div class="ai-function-item" @click="aiFunction()">
        <img class="funciton-logo" src="../imgs/ai-zaiti.png" alt="找载体" />
        <div class="fuction-text">找载体</div>
      </div>
      <div class="ai-function-item" @click="aiFunction()">
        <img class="funciton-logo" src="../imgs/ai-suanfa.png" alt="找算法" />
        <div class="fuction-text">找算法</div>
      </div>
      <div class="ai-function-item" @click="aiFunction()">
        <img class="funciton-logo" src="../imgs/ai-xuqiu.png" alt="找需求" />
        <div class="fuction-text">找需求</div>
      </div>
      <div class="ai-function-item" @click="aiFunction()">
        <img class="funciton-logo" src="../imgs/ai-yingyong.png" alt="找应用" />
        <div class="fuction-text">找应用</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const textarea = ref("");

const aiFunction = () => {
  ElMessage.warning("暂未开通，敬请期待");
};
</script>

<style lang="scss" scoped>
.aizs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.ai-title {
  width: 100%;
  height: 60px;
  flex-direction: row;

  .ai-logo {
    width: 45px;
    height: 45px;
    margin-right: 20px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("../imgs/ai-logo.png");
    background-position: center center;
  }

  span {
    font-family: YouSheBiaoTiHei;
    text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
      0px 0px 30px rgba(0, 145, 255, 1);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 2.5px;
  }
}

.ai-input {
  width: 80%;
  height: 70px;
  margin: 5px 0;
  position: relative;

  .send-btn {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 88px;
    height: 30px;
    border-radius: 4px;
    background: rgba(47, 115, 246, 1);
    justify-content: space-around;
    cursor: pointer;
  }
}

:deep(.el-textarea__inner) {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 2px 1px rgba(1, 126, 255, 0.82);
  color: #fff !important;
}

.ai-function {
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .ai-function-item {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: url("../imgs/ai-function.png") center center / 100% 100%
      no-repeat;
    cursor: pointer;

    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
  .funciton-logo {
    width: 48px;
    height: 48px;
  }

  .fuction-text {
    text-shadow: 0px 0px 12px rgba(30, 198, 255, 0.8);
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
