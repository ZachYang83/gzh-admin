<template>
  <div class="board-wrap">
    <div class="inner-wrap" @click="goToDetail(id)">
      <div class="decoration"></div>
      <div class="main-content">
        <div class="line1 flex-center">
          <span class="name">{{ name }}</span> <span>·</span
          ><span class="school">{{ value1 }}</span>
        </div>
        <div class="line3" v-if="key2">
          <svg-icon icon-class="expert-zhicheng" calss="svg-icon" size="1rem" />
          <span>{{ value2 }}</span>
        </div>
        <div class="line4" v-if="key3" data-full-text="{{ value3 }}">
          <svg-icon icon-class="expert-field" calss="svg-icon" size="1rem" />
          {{ key3 }}：<el-tooltip
            class="box-item"
            effect="light"
            :content="value3"
            placement="top-start"
            ><span>{{ value3 }}</span>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="BoardType4">
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
  id: {
    type: Number,
    default: 1,
  },
  detailName: {
    type: String,
    default: "sceneDetail",
  },
  name: {
    type: String,
    default: "",
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
  }
});
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
  justify-content: space-around;
  background: linear-gradient(to right, #224064, #213A56);
}
.decoration {
  position:absolute;
  left:0;
  top:20px;
  width: 6px;
  height: 22px;
  background-color:#2b87ff;
}

.main-content {
  width: 100%;
  height: calc(100% - 120px);
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  text-align: start;
  color: #fff;
}

.line1 {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ALIBABAPUHUITI;

  .name {
    font-size: 20px;
    color: #2b87ff;
    font-weight: 600;
  }

  .school {
    color: #999;
    font-size: 16px;
    font-weight: 600;
  }

  > span {
    margin: 0 5px;
    font-size: 20px;
    font-weight: 900;
    color: #999;
  }
}

.line2 > span {
  background: linear-gradient(40deg, #2b87ff, #2bcaff);
  padding: 4px 6px;
  border-radius: 4px;
}

.line3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(154, 168, 184, 1);
}

.line4 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(154, 168, 184, 1);
}

.svg-icon {
  margin-right: 8px;
}
</style>
