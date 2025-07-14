<template>
  <div class="fzgk-card">
    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/fzgk-cygm.png" alt="产业规模" />
      </div>
      <div class="right">
        <div class="item-total">
          广州人工智能产业规模
          <div class="item-total-count">
            1265
            <span class="item-total-unit">亿元</span>
          </div>
        </div>
        <div class="item-percent">
          <div class="percent-province">
            占全省
            <span>25%</span>
          </div>
          <div class="percent-country">
            占全国
            <span>7.8%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/fzgk-zjz.png" alt="增加值" />
      </div>
      <div class="right">
        <div class="item-total">
          2024年增加值
          <div class="item-total-count">
            588
            <span class="item-total-unit">亿元</span>
          </div>
        </div>
        <div class="item-percent">
          <div class="percent-province">
            同比增加
            <span>11.4%</span>
            <svg-icon icon-class="arrow-up" class="svg-icon" size="1rem" />
          </div>
          <div class="percent-country">
            占GDP比重
            <span>1.9%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/gzgk-ssgm.png" alt="税收规模" />
      </div>
      <div class="right">
        <div class="item-total">
          2024年税收规模
          <div class="item-total-count">
            66
            <span class="item-total-unit">亿元</span>
          </div>
        </div>
        <div class="item-percent">
          <div class="percent-province">
            同比增加
            <span>11%</span>
            <svg-icon icon-class="arrow-up" class="svg-icon" size="1rem" />
          </div>
          <div class="percent-country">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@font-face {
  font-family: YouSheBiaoTiYuan;
  src: url("@/assets/font/YouSheBiaoTiYuan.otf");
}

@font-face {
  font-family: ALIBABAPUHUITI;
  src: url("@/assets/font/ALIBABAPUHUITI.TTF");
}

.fzgk-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: default;
}

.fzgk-item {
  display: flex;
  align-items: center;
  width: 440px;
  height: 80px;
  margin: 2px 0;
  padding: 4px;
  background: linear-gradient(
    90.11deg,
    rgba(2, 62, 112, 1) 0%,
    rgba(2, 62, 112, 0) 100%
  );
  border-radius: 50px 0 0 50px;
  flex-direction: row;
  box-sizing: border-box;
}

.left {
  width: 90px;
  height: 100%;

  .item-logo {
    width: 60px;
    height: 60px;
  }
}

.right {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding-left:10px;
  justify-content: space-between;
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
    font-family: "YouSheBiaoTiYuan";
    padding-top: 5px;
    text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
    font-size: 36px;
    font-weight: 400;
  }

  .item-total-unit {
    font-size: 12px;
    font-weight: 400;
  }

  .item-percent {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    gap: 20px;

    span {
      margin-left: 5px;
      text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
      font-size: 20px;
      font-weight: 500;
    }
  }
}
</style>
