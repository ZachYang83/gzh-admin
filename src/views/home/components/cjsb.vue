<template>
  <div class="cjsb-card">
    <div class="cjsb-content-wrap">
      <div class="left">
        <img class="cjsb-logo" src="../imgs/cjsb-icon.png" alt="场景申报icon" />
      </div>
      <div class="right">
        <div class="cjsb-title">人工智能场景申报</div>
        <div class="cjsb-content">
          快捷入口
          <img src="../imgs/cjsb-enter.png" alt="进入标志" />
        </div>
      </div>
    </div>

    <img src="../imgs/cjsb-button.png" alt="场景申报" class="bgimg" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cjsb-card {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cjsb-content-wrap {
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 90%;
  //background-color: rgba(255, 255, 255, 0.8);

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 80%;
      margin-left: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
    align-items: flex-start;
    text-shadow: 0px 0px 9px rgba(30, 198, 255, 0.8);
    .cjsb-title {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }
    .cjsb-content {
      font-size: 16px;
      color: #fff;
      margin-top: 10px;
      display: flex;
      align-items: center;
      img {
        height: 18px;
        margin-left: 10px;
      }
    }
  }
}
.bgimg {
  width: 100%;
}
</style>
