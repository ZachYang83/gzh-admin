<template>
  <div class="board-wrap">
    <div class="inner-wrap" @click="goToDetail(id)">
      <div
        class="avatar"
        :style="{ backgroundImage: `url(${avatarUrl})` }"
      ></div>
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

<script setup name="BoardType3">
import avatar_male from "@/assets/images/expert-avatar-male.png";
import avatar_female from "@/assets/images/expert-avatar-female.png";
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
  gender: {
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
  },
  key3: {
    type: String,
    default: "",
  },
  value3: {
    type: String,
    default: "",
  },
});

const avatarUrl = computed(() => {
  return props.gender === "女" ? avatar_female : avatar_male;
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
  opacity: 0;
  cursor: pointer;
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
  padding: 4% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url("@/assets/images/bg-detail-board4.png");
  background-size: 100% 100%;
}

.avatar {
  width: 120px;
  height: 120px;
  // background: url("@/assets/images/expert-avatar-male.png") center center / 100% 100%
  //   no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
