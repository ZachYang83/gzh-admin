<template>
  <!-- 居中版排列 -->
  <div class="board-wrap">
    <div class="inner-wrap">
      <div class="title">{{ title }}</div>
      <div class="main-content">
        <div class="line1">
          {{ key1 }}：<span>{{ value1 }}</span><span v-if="value1" style = "font-size: 14px;">万元</span>
        </div>
        <div class="line2">
          {{ key2 }}：<span>{{ value2 }}</span>
        </div>
        <div class="line3">
          {{ key3 }}：<span>{{ value3 }}</span>
        </div>
        <div class="line4">
          {{ key4 }}：<span>{{ value4 }}</span>
        </div>
        <button class="detail-btn" @click.stop="goToDetail(id)">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script setup name="BoardType2">
import { useRouter } from "vue-router";
const router = useRouter();

const goToDetail = (id) => {
  router.push({
    name: props.detailName,
    query: {
      id: id,
    },
  });
};

const props = defineProps({
  ifimg: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "这是应用场景的标题",
  },
  id: {
    type: Number,
    default: 1,
  },
  detailName: {
    type: String,
    default: "sceneDetail",
  },
  key1: {
    type: String,
    default: "关键字1",
  },
  value1: {
    type: String,
    default: "值1",
  },
  key2: {
    type: String,
    default: "关键字2",
  },
  value2: {
    type: String,
    default: "值2",
  },
  key3: {
    type: String,
    default: "关键字3",
  },
  value3: {
    type: String,
    default:
      "",
  },
  key4: {
    type: String,
    default: "关键字4",
  },
  value4: {
    type: String,
    default:
      "",
  },
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: YouSheBiaoTiYuan;
  src: url("@/assets/font/YouSheBiaoTiYuan.otf");
}
.board-wrap {
  display: flex;
  width: 20%;
  height: 50%;
  padding: 1%;
  box-sizing: border-box;
}

.inner-wrap {
  width: 100%;
  height: 100%;
  padding: 2% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/images/bg-detail-board4.png");
  background-size: 100% 100%;
}
.title {
  margin-top: 10px;
  font-family: YouSheBiaoTiYuan;
  font-size: 22px;
  width: fit-content;
  color: #d8f0ff;
  text-align: center;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.main-content {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.line1 > span{
  color: #D43030;
  font-weight: 600;
  font-size: 20px;
}

.line2 > span {
  background: linear-gradient(40deg, #2b87ff, #2bcaff);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
.line4 {
  color: rgba(154, 168, 184, 1);
}

.detail-btn {
  width: 50%;
  height: fit-content;
  background-image: url("@/assets/images/bg-button2.png");
  background-size: 100% 100%;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 10px rgba(30, 120, 255, 0.8);
  }
}
</style>
