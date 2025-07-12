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
            v-for="(board, index) in SceneHomeBoards"
            :key="index"
            :title="board.title"
            :intro="board.intro"
            :target="board.target"
            :data="board.data"
          />
        </div>
        <div class="right-btn">
          <svg-icon
            icon-class="double-arrow"
            size="2rem"
            @click="nextBoard()"
            v-if="currentBoardIndex < figureData.length - 4"
          ></svg-icon>
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
import { useRouter } from "vue-router";
const router = useRouter();

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
      "AI在工业机器人、质量检测、设备预测维护、工艺优化等方面成为制造升级的核心驱动力，助力企业实现柔性制造与数字化转型。",
    target: "./table",
    data: [],
  },
  {
    title: "医药健康",
    intro:
      "AI在辅助诊断、医学影像识别、药物研发、慢病管理等方面将极大提升医疗服务效率与质量，推动个性化医疗和远程健康管理的发展。",
    target: "./table",
    data: [],
  },
  {
    title: "综合交通",
    intro:
      "AI将在交通流量预测、自动驾驶、智能调度、出行规划等方面深度应用，构建安全、高效、绿色的现代综合交通体系。",
    target: "./table",
    data: [],
  },
  {
    title: "能源环保",
    intro:
      "人工智能将在能源优化调度、碳排放监测、环境质量预测等领域发挥关键作用，助力“双碳”目标实现。通过AI算法提升资源利用效率，实现绿色可持续发展。",
    target: "./table",
    data: [],
  },
  {
    title: "城市治理",
    intro:
      "人工智能将在城市管理中发挥重要作用，通过智能交通、智慧环卫、城市安全监测等应用，提升城市运行效率和公共服务水平。",
    target: "./table",
    data: [],
  },
  {
    title: "商贸流通",
    intro:
      "AI在精准营销、智能推荐、跨境电商、供应链优化等方面将成为商贸领域的重要支撑，提升运营效率与用户体验。数据分析与商业智能深度融合，推动商业模式创新。",
    target: "./table",
    data: [],
  },
  {
    title: "教育教学",
    intro:
      "AI技术将推动个性化学习和智能化教学工具的发展，助力因材施教，提高教育质量和公平性。同时，AI在作业批改、学情分析、虚拟教师等方面也将广泛应用。",
    target: "./table",
    data: [],
  },
  {
    title: "智能办公",
    intro:
      "AI助手、语音识别、文档自动生成、会议纪要整理等功能将显著提升办公效率，打造更智能、协同、个性化的办公环境。",
    target: "./table",
    data: [],
  },
  {
    title: "数字创意",
    intro:
      "AI赋能的内容生成、数字人、音视频创作等将重塑数字创意产业形态，推动内容生产效率和表现力大幅提升。多模态生成式AI将成为数字创意的新引擎。",
    target: "./table",
    data: [],
  },
  {
    title: "政务服务",
    intro:
      "政务大模型、智能问答系统、流程自动化等AI应用将提升政府服务的智能化水平，实现高效、便捷、透明的政务服务体验。",
    target: "./table",
    data: [],
  },
  {
    title: "智能安防",
    intro:
      "AI驱动的人脸识别、行为分析、异常检测等技术将全面提升公共安全防控能力，实现从“事后追溯”到“事前预警”的转变。",
    target: "./table",
    data: [],
  },
  {
    title: "现代农业",
    intro:
      "AI将在农业智能感知、作物生长建模、病虫害预警、无人农场等方面广泛应用，推动农业生产向精准化、自动化方向发展，提升农业产出和可持续性。",
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
  Api.getAll().then((res) => {
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
const goToTable = (title) => {
  // toPage("./table");
  router.push({
    name: "scenceTable",
    query: {
      kind: title,
    },
  });
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
  gap: 2%;
  align-items: center;
  justify-content: space-between;
  //background-color: antiquewhite;
  padding: 1vh 0;
  overflow: hidden;
}
</style>
