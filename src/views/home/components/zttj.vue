<template>
  <div class = "zttj-card">
    <div class = "zztj-item">
      <div class = "left">
        <img class = "item-logo" src = "../imgs/zttj-cj.png" alt = "场景图标" />
      </div>
      <div class = "right">
        <div class = "right-figure">328</div>
        <div class = "right-name">场景</div>
      </div>
    </div>
    <div class = "zztj-item">
      <div class = "left">
        <img class = "item-logo" src = "../imgs/zttj-yypt.png" alt = "应用平台图标" />
      </div>
      <div class = "right">
        <div class = "right-figure">17</div>
        <div class = "right-name">应用平台</div>
      </div>
    </div>
    <div class = "zztj-item">
      <div class = "left">
        <img class = "item-logo" src = "../imgs/zttj-sf.png" alt = "算法" />
      </div>
      <div class = "right">
        <div class = "right-figure">471</div>
        <div class = "right-name">算法</div>
      </div>
    </div>
    <div class = "zztj-item">
      <div class = "left">
        <img class = "item-logo" src = "../imgs/zttj-gxdj.png" alt = "供需对接" />
      </div>
      <div class = "right">
        <div class = "right-figure">154</div>
        <div class = "right-name">供需对接</div>
      </div>
    </div>
    <div class = "zztj-item">
      <div class = "left">
        <img class = "item-logo" src = "../imgs/zttj-bd.png" alt = "榜单" />
      </div>
      <div class = "right">
        <div class = "right-figure">6</div>
        <div class = "right-name">榜单</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @font-face {
  font-family: YouSheBiaoTiYuan;
  src: url("@/assets/font/YouSheBiaoTiYuan.otf");
  }

  .zttj-card{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  }
  .zztj-item {
    width:33.333%;
    display: flex;
    align-items: center;
    justify-content: center;
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
        background: linear-gradient(to bottom, white, #B2EBFF, #0DCAF0);
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
