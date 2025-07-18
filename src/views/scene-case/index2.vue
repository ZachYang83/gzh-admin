<template>
  <div class="cj-wrap">
    <div class="main-title">
      <Tybtl_switch title="千行百业应用场景全覆盖"  :title_list="['社会场景','国资场景']" :link_list = "['Scene','Scene2']" :title_index = 1 :isHome="true"></Tybtl_switch>
    </div>
    <div class="main-content">
      <div class="figure-boards">
        <template v-for="(item, index) in figureData" :key="index">
          <Figureboard
            :img_src="item.img_src"
            :count="item.count"
            :title="item.title"
            @click="goToTable(item.title)"
          />
          <!-- 最后一个元素不渲染分隔线 -->
          <div
            v-if="index < figureData.length - 1"
            class="separator"
            :key="'sep' + index"
          ></div>
        </template>
      </div>
      
      <div class="cj-list-boards">
        <div class="left-btn">
          <svg-icon
            icon-class="double-arrow"
            size="2rem"
            @click="previousBoard()"
            v-if="currentBoardIndex > 0"
          ></svg-icon>
        </div>
        <div class="boards-wrap">
          <SceneHomeBoard
            v-for="(board, index) in visibleBoards"
            :key="board.title"
            :title="board.title"
            :intro="board.intro"
            :target="board.target"
            :data="board.data"
            :class = "['scene-board',board.position]"
          />
        </div>
        <div class="right-btn">
          <svg-icon
            icon-class="double-arrow"
            size="2rem"
            @click="nextBoard()"
            v-if="currentBoardIndex < figureData.length - 5"
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Figureboard from "./components/figure-board.vue";
import SceneHomeBoard from "./components/scene-home-board.vue";
import Api from "@/api/scene/index2.js";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Tybtl_switch from "../../components/common/tybtl/tybtl_switch.vue";
const router = useRouter();
const getImage = (imageName) => {
  return new URL(`./imgs/${imageName}`, import.meta.url).href;
};

const currentBoardIndex = ref(0);

// 图标面板数据（可替换为接口获取）
const figureData = ref([
  {
    img_src:  getImage("icon-qbcj.png"),
    count: 0,
    title: "全部场景",
    path: "/scene/table",
  },
  {
    img_src: getImage("icon-znzz.png"),
    count: 0,
    title: "AI+制造", 
    path: "",
  },
  {
    img_src: getImage("icon-nyhb.png"),
    count: 0,
    title: "AI+能源环保", 
    path: "",
  },
  {
    img_src: getImage("icon-zhjt.png"),
    count: 0,
    title: "AI+交通", 
    path: "",
  },
  {
    img_src: getImage("icon-lyxx.png"),
    count: 0,
    title: "AI+旅游休闲",
    path: "",
  },
  {
    img_src: getImage("icon-cszl.png"),
    count: 0,
    title: "AI+城市治理", 
    path: "",
  },
]);

const sceneHomeBoards = ref([
  {},
  {
    title: "AI+制造",
    intro:
      "AI在工业机器人、质量检测、设备预测维护、工艺优化等方面成为制造升级的核心驱动力，助力企业实现柔性制造与数字化转型。",
    target: "./table",
    data: [],
  },
  {
    title: "AI+能源环保",
    intro:
      "人工智能将在能源优化调度、碳排放监测、环境质量预测等领域发挥关键作用，助力“双碳”目标实现。通过AI算法提升资源利用效率，实现绿色可持续发展。",
    target: "./table",
    data: [],
  },
  {
    title: "AI+交通",
    intro:
      "AI将在交通流量预测、自动驾驶、智能调度、出行规划等方面深度应用，构建安全、高效、绿色的现代综合交通体系。",
    target: "./table",
    data: [],
  },
  {
    title: "AI+旅游休闲",
    intro:
      "人工智能将在旅游个性化推荐、智能导览、虚拟现实体验、景区人流管理等方面发挥重要作用，提升游客体验与景区运营效率。",
    target: "./table",
    data: [],
  },
  {
    title: "AI+城市治理",
    intro:
      "人工智能将在城市管理中发挥重要作用，通过智能交通、智慧环卫、城市安全监测等应用，提升城市运行效率和公共服务水平。",
    target: "./table",
    data: [],
  },
  {}
]);
const visibleBoards = computed(() => {
  return [
    {...sceneHomeBoards.value[currentBoardIndex.value], position: 'chip1'},
    {...sceneHomeBoards.value[currentBoardIndex.value + 1], position: 'chip2'},
    {...sceneHomeBoards.value[currentBoardIndex.value + 2], position: 'chip3'},
    {...sceneHomeBoards.value[currentBoardIndex.value + 3], position: 'chip4'},  
    {...sceneHomeBoards.value[currentBoardIndex.value + 4], position: 'chip5'},
    {...sceneHomeBoards.value[currentBoardIndex.value + 5], position: 'chip6'}

  ];
});

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
  Api.getAll().then((res) => {
    let resData = res.data;

    sceneHomeBoards.value.forEach((board) => {
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
const goToTable = (title) => {
  // toPage("./table");
  router.push({
    name: "scenceTable2",
    query: {
      kind: title,
    },
  });
};

const previousBoard = () => {
  currentBoardIndex.value -= 1;
  // 实现左滚动逻辑
};
const nextBoard = () => {
  currentBoardIndex.value += 1;
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

.separator {
  width: 4vw;
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
  //gap: 2%;
  align-items: center;
  justify-content: flex-start;
  padding: 1vh 0;
  overflow: hidden;
  position: relative;
  //background-color: #ff8d1a;
}

.scene-board {
  //left: -25.5%;
  transition: transform 0.5s ease-in-out;
  position: absolute;
  //margin-left: 2%;
  &.chip1{
    transform: translateX(-109%);//4*width+3*gap = 100, gap/width = 0.5k, k-N*
  }
  &.chip2{
    transform: translateX(0.1%);
  }
  &.chip3{
    transform: translateX(109%);
  }
  &.chip4{
    transform: translateX(218%);
  }
  &.chip5{
    transform: translateX(327%);
  }
  &.chip6{
    transform: translateX(436%);
  }
}


</style>
