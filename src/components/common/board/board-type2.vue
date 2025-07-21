<template>
  <div class="board-wrap">
    <div class="inner-wrap">
      <div class="title">{{ title }}</div>
      <div class = "splitline"></div>
      <div class="main-content">
        
        <div class="line2" v-if="key2">
          {{ key2 }}：<span>{{ value2 }}</span>
        </div>
        <div class="line3" v-if="key3">
          {{ key3 }}：<span>{{ value3 }}</span>
        </div>
        <div class="line4" v-if="key4">
          {{ key4 }}：<span>{{ value4 }}</span>
        </div>
        <div class = "bottom-line">
          <div class="line1" v-if="/^\d/.test(value1)">
            {{ key1 }}：<span style = "font-size: 20px;">{{ value1 }}</span><span style = "font-size: 14px;">万元</span>
          </div>
          <div class="line1" v-else-if="key1">
            {{ key1 }}：<span>{{ value1 }}</span>
          </div>
          <button class="detail-btn" @click.stop="goToDetail(id)">查看详情</button>
        </div>
        
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
    default: "",
  },
  value1: {
    type: String,
    default: "",
  },
  key2: {
    type: String,
    default: "",
  },
  value2: {
    type: String,
    default: "",
  },
  key3: {
    type: String,
    default: "",
  },
  value3: {
    type: String,
    default:
      "",
  },
  key4: {
    type: String,
    default: "",
  },
  value4: {
    type: String,
    default:
      "",
  },
});
</script>

<style lang="scss" scoped>
.board-wrap {
  display: flex;
  width: 20%;
  height: 50%;
  padding: 1%;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease-out forwards;
  opacity:0;
}

@keyframes fadeIn {
  from {
    transform: translateY(10px);
    opacity: 0.6;
    scale:0.995;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    scale:1;
  }
}

.inner-wrap {
  width: 100%;
  height: 100%;
  padding: 2% 4%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-image: url("@/assets/images/bg-detail-board4.png");
  background-size: 100% 100%;
}
.title {
  width: 100%;
  line-height: 24px;
  height: 48px;
  font-size: 20px;
  font-family: YouSheBiaoTiYuan;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #e0f7fa;
  
}

.splitline{
  height: 0;
  width: 100%;
  border-bottom: #c4c4c4 1px dashed;
}
.main-content {
  width: 100%;
  height: calc(100% - 90px);
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: start;
  color:#ffffffe1;
}

.line1 > span{
  color: #D43030;
  font-weight: 600;
}

.line2 > span {
  background: linear-gradient(40deg, #2b87ff, #2bcaff);
  padding: 4px 6px;
  border-radius: 4px;
}

.bottom-line{
  width: 100%;
  display: flex;
  margin-top:10px;
  justify-content: space-around;
  align-items: center;
}

.detail-btn {
  width: 100px;
  height: 35px;
  margin-right: 10px;
  font-size: 14px;
  background-image: url("@/assets/images/bg-button2.png");
  background-size: 100% 100%;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 10px rgba(30, 120, 255, 0.8);
  }
}
</style>
