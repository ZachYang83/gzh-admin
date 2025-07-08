<template>
  <div class="tbqy-wrap">
    <div class="data-overview">
      <div class="data-card">
        <div class="data-card-left">
          <img class="logo" src="../imgs/tbqy-gsqy.png" alt="规上企业" />
          <div class="data">
            <span class="count">2191</span><span class="unit">户</span>
            <div class="name">全市人工智能规上企业</div>
          </div>
        </div>
        <div class="data-card-right">
          <div class="pie-chart">
            <img class="logo" src="../imgs/tbqy-gsqy-pie.png" alt="饼图" />
            <span class="percent">25.7%</span>
          </div>
          <div class="name">营收超1亿以上企业</div>
        </div>
      </div>
      <div class="data-card">
        <div class="data-card-left">
          <img
            class="logo"
            src="../imgs/tbqy-ysTop.png"
            alt="营收前200的企业"
          />
          <div class="data">
            <span class="count">916.7</span><span class="unit">亿元</span>
            <div class="name">营收前200的企业</div>
          </div>
        </div>
        <div class="data-card-right">
          <div class="pie-chart">
            <img class="logo" src="../imgs/tbqy-ysTop-pie.png" alt="饼图" />
            <span class="percent">72.5%</span>
          </div>
          <div class="name">占规上企业营收</div>
        </div>
      </div>
      <div class="data-card">
        <div class="data-card-left">
          <img
            class="logo"
            src="../imgs/tbqy-ssTop.png"
            alt="收税前200的企业"
          />
          <div class="data">
            <span class="count">2191</span><span class="unit">亿元</span>
            <div class="name">收税前200的企业</div>
          </div>
        </div>
        <div class="data-card-right">
          <div class="pie-chart">
            <img class="logo" src="../imgs/tbqy-ssTop-pie.png" alt="饼图" />
            <span class="percent">73%</span>
          </div>
          <div class="name">占规上企业税收</div>
        </div>
      </div>
    </div>
    <div class="data-chart">
      <div class="nav-bar">
        <div
          class="nav-item flex-center"
          :class="{ active: activeNav == 0 }"
          @click="activeNav = 0"
        >
          人工智能类企业数量对比
        </div>
        <div
          class="nav-item flex-center"
          :class="{ active: activeNav == 1 }"
          @click="activeNav = 1"
        >
          胡润中国人工智能企业50强对比
        </div>
      </div>
      <div class="chart-box flex-center">
        <img v-if="activeNav == 0" class="bar-chart" src="../imgs/tbqy-chart-common.png" >
        <img v-else class="bar-chart" src="../imgs/tbqy-chart-hurun.png" >
      </div>
    </div>
  </div>
</template>

<script setup>
let activeNav = ref(0);
</script>

<style lang="scss" scoped>
@font-face {
  font-family: YouSheBiaoTiYuan;
  src: url("@/assets/font/PangMenZhengDaoBiaoTiTi.otf");
}
.tbqy-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.data-overview {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .data-card {
    display: flex;
    width: 100%;
    height: 25%;
    flex-direction: row;
  }
}

.data-chart {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 35px;

    .nav-item {
      height: 100%;
      width: auto;
      padding: 0 8px;
      background: linear-gradient(
        180deg,
        rgba(15, 74, 159, 0) 0%,
        rgba(17, 75, 160, 0.95) 100%
      );
      border: 1px solid rgba(0, 45, 89, 0.8);
      box-sizing: border-box;
      text-shadow: 0px 0px 4px rgba(0, 145, 255, 1);
      font-size: 14px;
      font-weight: 400;
      color: rgba(216, 240, 255, 0.5);
      cursor: default;
    }

    .active {
      background: linear-gradient(
        180deg,
        rgba(15, 74, 159, 0) 0%,
        rgba(17, 75, 160, 0.95) 100%
      );
      border: 1px solid rgba(30, 123, 214, 0.8);

      text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
        0px 0px 10px rgba(0, 145, 255, 1);
      font-size: 14px;
      font-weight: 400;
      color: rgba(216, 240, 255, 1);
    }
  }

  .chart-box {
    width: 100%;
    height: calc(100% - 35px);
    padding-top: 5px;
    box-sizing: border-box;
  }
}

.data-card-left {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 65%;
  height: 100%;
  padding-left: 10px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("../imgs//tbqy-data-bg.png");
  background-position: center center;

  .logo {
    width: 50px;
    height: 50px;
  }

  .data {
    width: 75%;
    height: 100%;
    padding-left: 10px;
    text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);

    .count {
      font-family: YouSheBiaoTiYuan;
      font-size: 28px;
      font-weight: 400;
    }

    .unit {
      font-size: 12px;
      font-weight: 400;
      margin-left: 5px;
    }

    .name {
      font-size: 14px;
      font-weight: 500;
      margin-top: 5px;
    }
  }
}

.data-card-right {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;

  .pie-chart {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    .logo {
      width: 45px;
      height: 45px;
    }

    .percent {
      position: absolute;
      text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
      font-size: 14px;
      font-weight: 400;
      color: rgba(216, 240, 255, 1);
    }
  }

  .name {
    text-shadow: 0px 0px 9px rgba(30, 198, 255, 0.8);
    font-size: 10px;
    font-weight: 500;
  }
}
</style>
