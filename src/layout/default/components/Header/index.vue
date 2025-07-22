<template>
  <nav class="nav-wrap flex">
    <!-- 左侧导航 -->
    <div class="left-nav">
      <router-link
        to="/"
        class="nav-item left flex-center"
        active-class="active"
      >
        首页
      </router-link>

      <router-link
        to="/scene"
        class="nav-item left flex-center"
        active-class="active"
      >
        示范案例
      </router-link>

      <router-link
        to="/app"
        class="nav-item left flex-center"
        active-class="active"
      >
        终端产品
      </router-link>
      <router-link
        to="/revTask"
        class="nav-item left flex-center"
        active-class="active"
      >
        场景开放
      </router-link>
    </div>

    <!-- 中央标题 -->
    <div class="center-title">
      <h1 class="title">广智能</h1>
    </div>

    <!-- 右侧导航 -->
    <div class="right-nav">
      <router-link
        to="/supDemMatch"
        class="nav-item right flex-center"
        active-class="active"
      >
        供需对接
      </router-link>
      <router-link
        to="/algorithm"
        class="nav-item right flex-center"
        active-class="active"
      >
        智算超市
      </router-link>

      <router-link
        to="/expert"
        class="nav-item right flex-center"
        active-class="active"
      >
        专家人才
      </router-link>
      <router-link
        to="/policy"
        class="nav-item right flex-center"
        active-class="active"
      >
      政策助手
      </router-link>
    </div>
    <!-- <div class="ai-nav">
      <router-link to="/ai" class="flex-center" active-class="active">
        <svg-icon icon-class="ai-robot" size="3rem"></svg-icon>
      </router-link>
    </div> -->
  </nav>
</template>

<script>
import { ref } from "vue";

let activeTab = ref("首页");

export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/screen-mixin.scss";

.nav-wrap {
  width: 100%;
  height: 70px;
  display: flex;
  position: relative;
}

.left-nav,
.right-nav {
  display: flex;
  align-items: center;
  width:720px;
  // flex: 1;
  justify-content: center;
  cursor: pointer;

  .nav-item {
    width: 160px;
    height: 50px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;

    font-family: "YouSheBiaoTiHei";
    text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
      0px 0px 30px rgba(0, 145, 255, 1);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 2.5px;
    color: rgba(216, 240, 255, 1);
  }

  .left {
    background-image: url("@/assets/images/tabs-left.png");

    &.active {
      background-image: url("@/assets/images/tabs-left-active.png");
      text-shadow: 0px 0px 4px rgb(255, 153, 0),
      0px 0px 30px rgba(255, 153, 0);
    }
  }

  .right {
    background-image: url("@/assets/images/tabs-right.png");

    &.active {
      background-image: url("@/assets/images/tabs-right-active.png");
      text-shadow: 0px 0px 4px rgb(255, 153, 0),
      0px 0px 30px rgba(255, 153, 0);
    }
  }
}

.left-nav {
  padding: 0 30px;
}

.right-nav {
  padding: 0 30px;
}

.center-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  cursor: default;

  .title {
    font-family: "YouSheBiaoTiYuan";
    text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
      0px 0px 30px rgba(0, 145, 255, 1);
    font-size: 54px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 70px;
    color: rgba(216, 240, 255, 1);
    text-align: center;
    vertical-align: middle;
  }
}

.ai-nav {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
