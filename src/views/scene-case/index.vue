<template>
  <div class="cj-wrap">
    <div class="main-title">
      <Tybtl title="千行百业应用场景全覆盖" :isHome="true"></Tybtl>
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
          <svg-icon icon-class="double-arrow" size="2rem" @click="previousBoard()" v-if="currentBoardIndex > 0"></svg-icon>
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
          <svg-icon icon-class="double-arrow" size="2rem" @click="nextBoard()" v-if="currentBoardIndex < figureData.length - 4"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Figureboard from "./components/figure-board.vue";
import SceneHomeBoard from "./components/scene-home-board.vue";
import Api from "@/api/scene/index.js";
import common from "common";

const { toPage } = common();

const currentBoardIndex = ref(0);

// 图标面板数据（可替换为接口获取）
const figureData = ref([
  {
    img_src: "src/views/scene-case/imgs/icon-qbcj.png",
    count: 0,
    title: "全部场景",
    path: "/scene/table",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-znzz.png",
    count: 0,
    title: "智能制造", //
    path: "",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-yyjk.png",
    count: 0,
    title: "医药健康", //
    path: "",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zhjt.png",
    count: 0,
    title: "综合交通", //
    path: "",
  },
  //能源环保
  {
    img_src: "src/views/scene-case/imgs/icon-nyhb.png",
    count: 0,
    title: "能源环保",
    path: "",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-cszl.png",
    count: 0,
    title: "城市治理", //
    path: "",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-jyjx.png",
    count: 0,
    title: "教育教学", //
    path: "",
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zwfw.png",
    count: 0,
    title: "政务服务", //
    path: "",
  },
  //商贸流通
  {
    img_src: "src/views/scene-case/imgs/icon-smlt.png",
    count: 0,
    title: "商贸流通",
    path: "",
  },
  //数字创意
  {
    img_src: "src/views/scene-case/imgs/icon-szcy.png",
    count: 0,
    title: "数字创意",
    path: "",
  },
  //智能办公
  {
    img_src: "src/views/scene-case/imgs/icon-znbg.png",
    count: 0,
    title: "智能办公",
    path: "",
  },
  //智能安防
  {
    img_src: "src/views/scene-case/imgs/icon-znaf.png",
    count: 0,
    title: "智能安防",
    path: "",
  },
  //现代农业
  {
    img_src: "src/views/scene-case/imgs/icon-xdny.png",
    count: 0,
    title: "现代农业",
    path: "",
  },
  
]);

const SceneHomeBoards = ref([
  {
    title: "智能制造",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "医药健康",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "综合交通",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "能源环保",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "城市治理",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "商贸流通",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "教育教学",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "智能办公",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "数字创意",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "政务服务",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "智能安防",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
  {
    title: "现代农业",
    intro:
      "制造业正加速与人工智能融合，推动智能制造、质量检测、自动化生产等场景创新。",
    target: "./table",
    data: [],
  },
]);
onMounted(() => {
  //获取各类场景数量
  Api.getCaseCount().then((res) => {
    let resData = res.data;
    for (let i = 1; i < figureData.value.length; i++) {
      const figItem = figureData.value[i];
      const matchedItem = resData.find(
        (itemObj) => itemObj.field === figItem.title
      );
      if (matchedItem) {
        figItem.count = matchedItem.count;
      }
      const totalCount = resData.reduce(
        (sum, itemObj) => sum + itemObj.count,
        0
      );
      figureData.value[0].count = totalCount;
    }
  });

  // 获取场景
  Api.getCase().then((res) => {
    let resData = res.data;

    SceneHomeBoards.value.forEach((board) => {
      // 筛选data中sceneClass与当前board.title一致的数据
      const matchedData = resData.filter(
        (item) => item.sceneClass === board.title
      );
      // 将筛选结果赋值给该领域的data属性
      board.data = matchedData;
    });
  });

});

// 跳转方法
const goToDetail = (path) => {
  if (path) toPage(path);
};

const previousBoard = () => {
  currentBoardIndex.value -= 1;
  // 实现左滚动逻辑
  const boardsWrap = document.querySelector(".boards-wrap");
  if (boardsWrap) {
    // 计算新的滚动位置
    const newScrollLeft =
      boardsWrap.scrollLeft - boardsWrap.clientWidth * 0.255; // 0.255=0.235+0.02
    boardsWrap.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  }
};
const nextBoard = () => {
  currentBoardIndex.value += 1;
  // 实现右滚动逻辑
  const boardsWrap = document.querySelector(".boards-wrap");
  if (boardsWrap) {
    // 计算新的滚动位置
    const newScrollLeft =
      boardsWrap.scrollLeft + boardsWrap.clientWidth * 0.255; // 0.255=0.235+0.02-1px
    boardsWrap.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  }
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

.separator {
  width: 1.4vw;
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
  cursor: pointer;
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