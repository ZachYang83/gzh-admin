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
import common from "common";
import axios from "axios";


const { toPage } = common();

const currentBoardIndex = ref(0);

const listedFields =  [
  "智能制造",
  "医药健康",
  "综合交通",
  "城市治理",
  "教育教学",
  "政务服务"
];
// 图标面板数据（可替换为接口获取）
const figureData = ref([
  {
    img_src: "src/views/scene-case/imgs/icon-qbcj.png",
    count: 0,
    title: "全部场景",
    path: "/scene/table"
  },
  {
    img_src: "src/views/scene-case/imgs/icon-znzz.png",
    count: 0,
    title: "智能制造",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-yyjk.png",
    count: 0,
    title: "医药健康",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zhjt.png",
    count: 0,
    title: "综合交通",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-cszl.png",
    count: 0,
    title: "城市治理",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-jyjx.png",
    count: 0,
    title: "教育教学",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-zwfw.png",
    count: 0,
    title: "政务服务",//
    path: ""
  },
  {
    img_src: "src/views/scene-case/imgs/icon-qtly.png",
    count: 0,
    title: "其他领域",//商贸流通，数字创意，智能办公，智能安防，现代农业，能源环保...
    path: ""
  }
]);
const fetchData = async () => {
  try {
    const response = await axios.get("/api/scene/scene-case/getCaseCount");
    //console.log("请求成功:", response.data);
    if (response.data.code === "00000") {
      const apiData = response.data.data|| [];
      // 计算全部场景数量
      const totalAll = apiData.reduce((sum, item) => sum + item.count, 0);
      figureData.value[0].count = totalAll;

      // 更新每个具体领域的 count
      for (let i = 1; i < figureData.value.length - 1; i++) {
        const fieldTitle = figureData.value[i].title;
        const matched = apiData.find(item => item.field === fieldTitle);
        if (matched) {
          figureData.value[i].count = matched.count;
        }
      }

      // 计算其他领域数量
      const otherCount = apiData
        .filter(item => !listedFields.includes(item.field))
        .reduce((sum, item) => sum + item.count, 0);
      figureData.value[figureData.value.length - 1].count = otherCount;
    }
  } catch (error) {
    console.error("请求失败:", error);
  }
};

onMounted(() => {
  fetchData();
});
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

const previousBoard = () => {
  currentBoardIndex.value -= 1;
  // 实现左滚动逻辑
  const boardsWrap = document.querySelector('.boards-wrap');
  if (boardsWrap) {
    // 计算新的滚动位置
    const newScrollLeft = boardsWrap.scrollLeft - boardsWrap.clientWidth*0.255; // 0.255=0.235+0.02
    boardsWrap.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }
};
const nextBoard = () => {
  currentBoardIndex.value += 1;
  // 实现右滚动逻辑
  const boardsWrap = document.querySelector('.boards-wrap');
  if (boardsWrap) {
    // 计算新的滚动位置
    const newScrollLeft = boardsWrap.scrollLeft + boardsWrap.clientWidth*0.255; // 0.255=0.235+0.02-1px
    boardsWrap.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
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
