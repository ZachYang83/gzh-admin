<template>
  <div class = "detail-wrap">
    <div class="main-title">
      <Tybtl :title="productName" :isHome="false"></Tybtl>
    </div>
    <div class = "main-content">
      <div class = "basic-info">
        <div class = "sub-title">
          基本信息
        </div>
        <div class = "sub-content">
        <div class = "info-item" v-for="(value, key) in basicInfo" :key="key">
          <span class = "info-label">{{ key }}：</span>
          <span class = "info-value">{{ value }}</span>
        </div>
        </div>
      </div>
      <div class = "sub-intro">
        <div class = "sub-title">
          场景描述
        </div>
        <div class = "sub-content">
          {{ discription }}
        </div>
      </div>
      <div class = "sub-intro">
        <div class = "sub-title">
          建设基础
        </div>
        <div class = "sub-content">
          {{ construction_base }}
        </div>
      </div>
      <button class="contact-trigger" @click="showContact()">
      </button>
      <div class="contact-content" v-if="isShowing">
        <div>联系方式：{{ contact }}</div>
        <span @click="showContact()">X</span>
      </div> 
      
      
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/supDemMatch/supply.js";
const route = useRoute(); 
const supplyid = ref(10);
const productName = ref("场景名称");
const discription = ref("这是一个示例场景的详细描述信息。");
const construction_base = ref("这是一个示例场景的建设基础信息。");
const basicInfo = ref({
  "服务商": "广州广电运通信息科技有限公司",
  "场景领域": "医药健康",
  "所属区域": "广州市",
  "行业主管部门": "场景所需部门"
});
const contact = ref("如需联系洽谈，请拨打：1234567890");
const isShowing = ref(false);

onMounted(() => {
  if(route.query.id){
    supplyid.value = Number(route.query.id);
    console.log(supplyid.value,'supplyid'); 
  }
  // 根据id获取场景
  Api.getById({'id':supplyid.value}).then((res) => {
    let resData = res.data;
    console.log(resData,'resData');
    productName.value = resData.productName;
    discription.value = resData.discription;
    construction_base.value = resData.constructionBase;

    basicInfo.value = {
      "服务商": resData.supportingUnit,
      "场景领域": resData.sceneClass,
      "所属区域": resData.district,
      "行业主管部门": resData.responsibleDepartment
    };
    contact.value = resData.contact;
  });
});
const showContact = () => {
  if (contact.value) {
    isShowing.value = !isShowing.value;
  }
};
</script>

<style lang="scss" scoped>

.detail-wrap{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.main-title{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content{
  width: 80%;
  height: fit-content;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image:url('./imgs/bg-detail-supdem.png');
  background-size: 100% 100%;
  padding: 30px 100px;
  gap:20px;
  position: relative;
}
.info-item{
  font-size: 16px;
  
}
.sub-title {
  width: fit-content;
  height: 35px;
  width:110px;
  
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url('./imgs/bg-title-2.png');
  background-position: left bottom;
  background-repeat: no-repeat;
  color: #D8F0FF;
}
.sub-content{
  width: 100%;
  height: fit-content;
  font-size: 16px;
  padding:10px 0 10px 20px;
  line-height: 3rem;
}

.contact-trigger {
  font-size: 16px;
  padding-right: 10px;
  cursor: pointer;
  background-image: url("@/assets/images/bg-button1.png");
  background-color: transparent;
  background-size: 100% 100%;
  width: 160px;
  height: 30px;
  left: calc(50% - 80px);
  bottom: -15px;
  border: none;
  &:hover{
      scale: 1.01 1.05;
  }
  &:active{
      scale: 1;
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
  left: 0;
  bottom: 80px;
  span{
    position: absolute;
    top:0px;
    right:10px;
    cursor: pointer;
  }
}
</style>
