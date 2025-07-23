<template>
  <div class="board-wrap">
    <div class="inner-wrap">
      <div class="decoration"></div>

      <div class="main-content" @click="openNewPage(webLink)">
        <div class="title-box">
          <span class="title">{{ title }}</span>
          <span class="lable">{{ lable }}</span>
        </div>
        <div class="info-box">
          <span class="info-item"> 发布日期：{{ releaseDate }} </span>
          <span class="info-item"> 发布机构：{{ publisher }} </span>
          <span class="info-item"> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="BoardType4">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  lable: {
    type: String,
    default: "",
  },
  releaseDate: {
    type: String,
    default: "",
  },
  publisher: {
    type: String,
    default: "",
  },
  webLink: {
    type: String,
    default: "",
  },
});

const openNewPage = (webLink) => {
  window.open(webLink, "_blank");
};
</script>

<style lang="scss" scoped>
.board-wrap {
  display: flex;
  width: 100%;
  height: 20%;

  padding: 5px 0;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease-out forwards;
  cursor: pointer;
  position: relative;
}

@keyframes fadeIn {
  from {
    transform: translateY(10px);
    opacity: 0.6;
    scale: 0.995;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    scale: 1;
  }
}

.inner-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    270deg,
    rgba(0, 156, 255, 0.05) 0%,
    rgba(2, 132, 255, 0.15) 100%
  );
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: radial-gradient(
      circle,
      rgb(122, 201, 251) 30%,
      rgba(255, 255, 255, 0) 70%
    );
    z-index: 1;
  }

  &:hover {
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(20deg, #2a98ff, #cbe6ff 50%, #0a89ff) 1;
    box-sizing: border-box;
  }
}

.decoration {
  position: absolute;
  left: 0;
  top: 20px;
  width: 6px;
  height: 22px;
  background-color: #2b87ff;
}

.main-content {
  width: 100%;
  height: 100px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  text-align: start;
  color: #d8f0ff;
  
  &:hover{
    color: #2b87ff;
  }
}

.title-box {
  display: flex;
  align-items: center;
  .title {
    font-family: ALIBABAPUHUITI;
    font-size: 20px;
    font-weight: 500;
  }

  .lable {
    margin-left: 10px;
    display: inline-block;
    color: #2b87ff;
    border: #2b87ff 1px solid;
    padding: 2px 5px;
    border-radius: 5px;
  }
}

.info-box {
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: rgb(154, 168, 184);

  .info-item {
    margin-right: 80px;
  }
}
</style>
