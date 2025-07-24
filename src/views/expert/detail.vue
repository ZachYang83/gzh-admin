<template>
  <div class="detail-wrap">
    <!-- <div class="main-title">
      <Tybtl :title="requirementName" :isHome="false"></Tybtl>
    </div> -->
    <div class="back-icon flex-center" @click="goBack()">
      <svg-icon
        icon-class="arrow-back"
        class="svg-icon"
        size="3em"
      />
      <span>返回</span>
    </div>
    <div class="main-content">
      <div class="content-top flex-center">
        <div class="content-top-left"></div>
        <div class="content-top-right">
          <div class="info-name">{{ exportInfo.name }}</div>
          <div class="info-detail">
            <div class="info-item info-workplace">
              <svg-icon
                icon-class="expert-school"
                calss="svg-icon"
                size="1rem"
              />
              所属科研院所：{{ exportInfo.workplace }}
            </div>
            <div class="info-item info-zhicheng">
              <svg-icon
                icon-class="expert-zhicheng"
                calss="svg-icon"
                size="1rem"
              />
              职位：{{ exportInfo.position }}
            </div>
            <div class="info-item info-field">
              <svg-icon
                icon-class="expert-field"
                calss="svg-icon"
                size="1rem"
              />
              研究领域：{{ exportInfo.field }}
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="sub-intro">
          <div class="sub-title">简介</div>
          <div class="sub-content">{{ exportInfo.introduction}}</div>
        </div>
        <!-- <div class="sub-intro">
          <div class="sub-title">科研成果</div>
          <div class="sub-content"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import Api from "@/api/expert/index.js";
const route = useRoute();
import { useRouter } from "vue-router";
const router = useRouter();
const expertId = ref(10);
const requirementName = ref("场景名称");
const exportInfo = reactive({});

onMounted(() => {
  if (route.query.id) {
    expertId.value = Number(route.query.id);
    // console.log(expertId.value, "expertId");
  }
  // 根据id获取场景
  Api.getById({ id: expertId.value })
    .then((res) => {
      let resData = res.data;
      Object.assign(exportInfo, resData);
      // console.log(exportInfo, "exportInfo");
    })
    .catch((error) => {
      ElMessage({
        message: "请求数据出错",
        type: "error",
      });
    });
});

const goBack = () => {
   router.back();
};
</script>

<style lang="scss" scoped>
.detail-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  overflow-y: auto;
}

.back-icon {
  position: absolute;
  top: 10px;
  left: 100px;
  cursor: pointer;
  > span {
    font-size: 18px;
    color: #d8f0ff;
  }
}

.main-title {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: fit-content;

  .content-top {
    width: 1400px;
    height: fit-content;
    min-height: 250px;
    background-image: url("@/assets/images/bg-detail-page2.png");
    background-size: 100% 100%;
    padding: 30px 100px;

    .content-top-left {
      width: 150px;
      height: 150px;
      background: url("@/assets/images/expert-avatar.png") center center / 100%
        100% no-repeat;
    }

    .content-top-right {
      flex: 1;
      height: 150px;
      padding-left: 50px;
    }
  }
}

.info-name {
  font-size: 30px;
  color: #d8f0ff;
  font-family: ALIBABAPUHUITI;
  margin-bottom: 10px;
}

.info-detail {
  .info-item {
    color: rgba(154, 168, 184, 1);
    margin: 10px 0px;
  }
  .svg-icon {
    margin-right: 10px;
  }
}

.content-bottom {
  width: 1400px;
}

.sub-intro {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;

  .sub-title {
    font-size: 18px;
    height: 40px;
    width: 300px;
    font-family: ALIBABAPUHUITI;
    background-image: url("@/assets/images/bg-title1.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    align-items: center;
  }

  .sub-content {
    width: 100%;
    height: fit-content;
    padding: 20px;
    min-height: 80px;
    font-size: 16px;
    line-height: 2rem;
    background: linear-gradient(to bottom, #32465e, #224388);
    border: 1px solid rgba(0, 170, 255, 1);
    border-image: linear-gradient(
        0deg,
        rgba(0, 213, 255, 1) 0%,
        rgba(0, 132, 255, 1) 100%
      )
      30;
  }
}
</style>
