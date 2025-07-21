<template>
  <div class="detail-wrap">
    <div class="main-title">
      <Tybtl :title="sceneName" :isHome="false"></Tybtl>
    </div>
    <div class="main-content">
      <div class="main-intro">
        <div class="left">
          <img
            src="./imgs/example-scene.png"
            alt="场景详情背景图"
            class="bg-image"
          />
        </div>
        <div class="right">
          <div class="cjjs">场景介绍</div>
          <div class="cjjs-content">{{ discription }}</div>
          <div class = "units">
            <div class="unit">
              <span>场景技术应用单位：</span>{{ application_unit }}
            </div>
            <div class="unit">
              <span>场景技术支持单位：</span>{{ supporting_unit }}
            </div>
          </div>
          
        </div>
        <!-- <div class="contact-trigger">联系洽谈</div> -->
        <div class = "contact-content">{{ contact }}</div>
      </div>
      <div class="sub-intro">
        <div class="sub-title">拟进一步推广应用的计划</div>
        <div class="sub-content">
          {{ future_plan }}
        </div>
      </div>
      <div class="sub-intro">
        <div class="sub-title">相关信息</div>
        <div class="sub-content info-content">
          <!-- 相关信息表格 ：{totalInvestment: "2750万元"， sceneClass: "智能制造"， }-->
          <div v-for="(value, key) in otherInfo" :key="key">
            <div class="info-key flex-center">{{ key }}</div>
            <div class="info-value flex-center">{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/scene/index.js";
const route = useRoute();
const sceneid = ref(10);
const application_unit = ref("技术应用单位");
const supporting_unit = ref("技术支持单位");
const sceneName = ref("场景名称");
const discription = ref("这是一个示例场景的详细描述信息。");
const future_plan = ref("这是一个示例场景的未来推广应用计划。");
const otherInfo = ref({
  总投资: "2750万元",
  场景领域: "智能制造",
  所属区域: "广州市",
  落地时间: "2025年",
});
const contact = ref("如需联系洽谈，请拨打：1234567890");

onMounted(() => {
  if (route.query.id) {
    sceneid.value = Number(route.query.id);
    console.log(sceneid.value, "sceneid");
  }
  // 根据id获取场景
  Api.getCaseById({ id: sceneid.value }).then((res) => {
    let resData = res.data;
    console.log(resData, "resData");
    sceneName.value = resData.projectName;
    discription.value = resData.discription;
    application_unit.value = resData.applicationUnit;
    supporting_unit.value = resData.supportingUnit;
    future_plan.value = resData.futurePlan;
    otherInfo.value = {
      总投资: resData.totalInvestment,
      场景领域: resData.sceneClass,
      所属区域: resData.district,
      落地时间: resData.deploymentTime,
    };
    contact.value = resData.contact;
  });
});
</script>

<style lang="scss" scoped>
.detail-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
}
.main-title {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-intro {
  width: 100%;
  height: 400px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/bg-detail-main.png");
  background-size: 100% 100%;
  position: relative;
}

.left {
  width: 43%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.right {
  width: 57%;
  height: 100%;
  padding-top: 30px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 20px;
  .cjjs {
    font-size: 20px;
    font-weight: 600;
  }
  .cjjs-content {
    height: 180px;
    width: 100%;
    font-size: 16px;
    line-height: 1.5rem;
    overflow: scroll;
    /*隐藏滑动条*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .units {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    color: #d8f0ff;
    font-size: 16px;
  }

  .unit {
    flex:1;
    span {
      font-weight: 600;
    }
  }
}

.contact-trigger {
  position: absolute;
  right:25px;
  bottom: 10px;
  font-size: 16px;
  padding-right: 10px;
  cursor: context-menu;
  &:hover {
    color: #d8f0ff;
  }
}

.contact-content{
  position: absolute;
  padding:20px;
  border: #d8f0ff 1px solid;
  width: 400px;
  font-size:16px;
  line-height: 2rem;
  background-color: #162637;
  right: 25px;
  bottom: 40px;
  display: none;
}
.contact-trigger:hover + .contact-content {
  display: block;
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
    white-space: nowrap;
    font-family: YouSheBiaoTiYuan;
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
    line-height: 1.5rem;
    background: linear-gradient(to bottom, #32465e, #224388);
    border: 1px solid rgba(0, 170, 255, 1);
    border-image: linear-gradient(
        0deg,
        rgba(0, 213, 255, 1) 0%,
        rgba(0, 132, 255, 1) 100%
      )
      30;
  }
  .info-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .info-key {
      font-weight: 600;
      color: #d8f0ff;
    }
    .info-value {
      margin-top: 10px;
      color: #eac328;
    }
  }
}
</style>
