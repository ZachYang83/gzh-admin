<template>
  <div class="fzgk-card">
    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/fzgk-cygm.png" alt="产业规模" />
      </div>
      <div class="middle">
        广州人工智能产业规模
        <div class="item-total-count">
          1265
          <span class="item-total-unit">亿元</span>
        </div>
      </div>
      <div class = "right">
        <div class="item-name">
            <span>占全省</span>
            <span>占全国</span>
        </div>
        <div class = "item-percent">
          <span>25%</span>
          <span>7.8%</span>
        </div>
      </div>
    </div>

    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/fzgk-zjz.png" alt="增加值" />
      </div>
      <div class="middle">
        2024年增加值
        <div class="item-total-count">
          588
          <span class="item-total-unit">亿元</span>
        </div>
      </div>
      <div class = "right">
        <div class="item-name">
            <span>同比增加</span>
            <span>占GDP比重</span>
        </div>
        <div class = "item-percent">
          <span>11.4%<svg-icon icon-class="arrow-up" class="svg-icon" size="1rem" /></span>
          <span>1.9%</span>
        </div>
      </div>
    </div>

    <div class="fzgk-item">
      <div class="left flex-center">
        <img class="item-logo" src="../imgs/gzgk-ssgm.png" alt="税收规模" />
      </div>
      <div class="middle">
        2024年税收规模
        <div class="item-total-count">
          66
          <span class="item-total-unit">亿元</span>
        </div>
      </div>
      <div class = "right">
        <div class="item-name">
            <span>同比增加</span>
        </div>
        <div class = "item-percent">
          <span>11%<svg-icon icon-class="arrow-up" class="svg-icon" size="1rem" /></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fzgk-card {
  width: 100%;
  height: 100%;
  display: flex;
  gap:5px;
  padding:4px;
  flex-direction: column;
  cursor: default;
}

.fzgk-item {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  height: 33%;
  padding: 4px;
  background: linear-gradient(
    90.11deg,
    rgba(2, 62, 112, 1) 0%,
    rgba(2, 62, 112, 0) 100%
  );
  border-radius: 50px 0 0 50px;
  flex-direction: row;
  box-sizing: border-box;

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 0 1px rgba(8, 206, 224, 0.5),
      0 0 10px 5px rgba(8, 206, 224, 0.3);
  }
}

.left {
  width: 90px;
  height: 100%;

  .item-logo {
    max-height: 85%;
    width: auto;
  }
}

.middle {
  height: 100%;
  width:43%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  color: #d8f0ff;
  font-size: 16px;
  font-weight: 700;
  font-family: ALIBABAPUHUITI;
  .item-total-count {
    height: max-content;
    font-family: "YouSheBiaoTiYuan";
    text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
    font-size: 36px;
    font-weight: 400;
    display: flex;
    align-items: flex-end;
    gap: 15px;
  }

  .item-total-unit {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 5px;
  }
}

.right{
  flex:1;
  height: 100%;
  display: flex;
  flex-direction: row;
  .item-name {
    width: 40%;
    white-space: nowrap;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 400;
    color: #d8f0ff;
    align-items: flex-end;
  }
  .item-percent{
    flex:1;
    padding-left:10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    color: #d8f0ff;
    span {
      margin-left: 5px;
      text-shadow: 0px 0px 4px rgba(0, 167, 255, 1);
      font-size: 20px;
      font-weight: 500;
      display: flex;
      align-items: center;
    }

  }

}

</style>
