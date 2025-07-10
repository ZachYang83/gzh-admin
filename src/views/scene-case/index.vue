<template>
  <div class="cj-wrap">
    <div class="main-title">
      <Tybtl title="千行百业应用场景全覆盖" isHome="True"></Tybtl>
    </div>
    <div class="main-content">
      <div class="figure-boards">
        <template v-for="(item, index) in figureData" :key="index">
          <Figureboard
            :img_src="item.img_src"
            :count="item.count"
            :title="item.title"
            @click="goToDetail(item.path)"
          />
          <!-- 最后一个元素不渲染分隔线 -->
          <div v-if="index < figureData.length - 1" class="separator" :key="'sep' + index"></div>
        </template>
      </div>

      <div class="cj-list-boards">
        <div class="left-btn">
          <svg-icon icon-class="double-arrow" size="2rem" @click="rollToNextLeft()"></svg-icon>
        </div>
        <div class="boards-wrap">
          <SceneHomeBoard
            v-for="(board, index) in SceneHomeBoards"
            :key="index"
            :title="board.title"
            :intro="board.intro"
            :target="board.target"
            :data="board.data"
          />
        </div>
        <div class="right-btn">
          <svg-icon icon-class="double-arrow" size="2rem" @click="rollToNextRight()"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Figureboard from "./components/figure-board.vue";
import SceneHomeBoard from "./components/scene-home-board.vue";
import common from "common";

const { toPage } = common();

// 图标面板数据（可替换为接口获取）
const figureData = [
  {
    img_src: "src/views/scene-case/imgs/icon-qbcj.png",
    count: 90,
    title: "全部场景",
    path: "/scene/table"
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zzly.png",
    count: 10,
    title: "制造领域",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-ylly.png",
    count: 10,
    title: "医疗领域",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-jtly.png",
    count: 10,
    title: "交通领域",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-cszl.png",
    count: 10,
    title: "城市治理",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-jyly.png",
    count: 10,
    title: "教育领域",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zwfw.png",
    count: 10,
    title: "政务服务",
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-qtly.png",
    count: 20,
    title: "其他领域",
    path: ""
  }
];
const SceneHomeBoards = ref([])
onMounted(async () => {
  try {
    const response = await import('./data/scene-data.json')
    SceneHomeBoards.value = response.default || response
  } catch (error) {
    console.error('加载场景数据失败:', error)
  }
})

// 跳转方法
const goToDetail = (path) => {
  if (path) toPage(path);
};

const rollToNextLeft = () => {
  // 实现左滚动逻辑
};
const rollToNextRight = () => {
  // 实现右滚动逻辑
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
  height: 70px;
}
.main-content {
  width: 100%;
  height: calc(100% - 70px);
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
  //background-color: #ff8d1a;
}
// .separator-wrap {
//   position:absolute;
//   width: 90%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;

// }
.separator {
  width: 2.6vw;
  height: 0.5vh;
  border-radius: 0.25vh;
  background: #ff8d1a;
}

.cj-list-boards {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left-btn, 
.right-btn {
  width: 2%;
  height: fit-content;
  margin: 0.5%;
  //background-color: #ff8d1a;
} 


.left-btn {
  transform: rotate(180deg);
}
.right-btn {
  
}
.boards-wrap {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap:2%;
  align-items: center;
  justify-content: space-between;
  //background-color: antiquewhite;
  padding: 1vh 0;
  overflow: hidden;
}



</style>
