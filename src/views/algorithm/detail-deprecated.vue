<template>
  <!-- 此版本相关算法和模型各最多一个 -->
  <div class = "detail-wrap">
    <div class="main-title">
      <Tybtl :title="productName" :isHome="false"></Tybtl>
    </div>
    <div class = "main-content">
      <div class = "sub-intro">
        <div class = "sub-title">
          基本信息
        </div>
        <div class = "sub-content">
          <div class = "basic-info">
            <div class = "info-item" v-for="(value, key) in basicInfo" :key="key">
              <span class = "info-label">{{ key }}：</span>
              <span class = "info-value">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class = "sub-intro">
        <div class = "sub-title">
          算法信息
        </div>
        <div class = "sub-content">
          <div class = "info-item" v-for="(value, key) in algInfo" :key="key">
            <span class = "info-label">{{ key }}：</span>
            <span class = "info-value">{{ value }}</span>
          </div>
        </div>
      </div>
      <div class = "sub-intro">
        <div class = "sub-title">
          相关算法/模型
        </div>
        <div class = "relative-algorithm">
          <div class = "rel-item" v-if = "relAlg" @click = "goToDetail(relAlg.id)">
            <div class = left>
              <img src="@/assets/images/icon-alg.png" alt="算法图标">
            </div>
            <div class = right>
                <div class="algName" :alg = "relAlg">{{relAlg.productName }}</div>
                <div class="companyName">{{ companyName }}</div>
            </div>
          </div>
          <div class = "rel-item" v-if = "relModel" @click = "goToDetail(relModel.id)">
            <div class = left>
              <img src="@/assets/images/icon-model.png" alt="算法图标">
            </div>
            <div class = right>
                <div class="algName" :model = "relModel">{{ relModel.productName }}</div>
                <div class="companyName">{{ companyName }}</div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/algorithm/index.js";
import router from "@/router/index.js";
const route = useRoute(); 
const algid = ref(10);
const productName = ref("算法名称");
const companyName = ref("提供方名称");

const relAlg = ref(null);
const relModel = ref(null);

const basicInfo = ref({
  
});

const algInfo = ref({
});

const load = () => {
  if(route.query.id){
    algid.value = Number(route.query.id);
  }
  // 根据id获取场景
  Api.getById({'id':algid.value}).then((res) => {
    let resData = res.data;
    // console.log(resData,'resData');
    productName.value = resData.productName;
    companyName.value = resData.companyName;
    basicInfo.value = {
      "备案编号": resData.filingNumber,
      "备案日期": resData.filingDate,
      "提供方": resData.companyName,
      "所属区域": resData.region,
      "算法类型": resData.category
    };

    algInfo.value = {
      "应用产品": resData.application,
      "主要用途": resData.purpose
    };

    
    Api.getByCompanyName({
      'company_name': companyName.value
    }).then((res) => {
      let resData = res.data;
      for (const data of resData){
        if(data.filingType === 'algorithm' && data.id !== algid.value){
          relAlg.value = data;
          break;
        }
      }
      for (const data of resData){
        if(data.filingType === 'model'){
          relModel.value = data;
          break;
        }
      }
    });
  });
}

onMounted(() => {
  load();
});

watch(() => route.query.id, (newId) => {
  if (newId) {
    load();
  }
});

const goToDetail = (id) =>{
    router.replace({
        name: "algDetail",
        query: { 
            id: id,
        },
    });
}
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
  background-image:url('@/assets/images/bg-detail-page.png');
  background-size: 100% 100%;
  padding: 30px 100px;
  gap:20px;
}
.basic-info{
  display:grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
}

.sub-intro{
  width: 100%;
}
.sub-title {
  width: fit-content;
  height: 35px;
  width:150px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url('@/assets/images/bg-title-2.png');
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
.relative-algorithm{
  margin-top:20px;
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: space-between;
  gap: 20px;
  .rel-item {
    display: flex;
    align-items: center;
    width: fit-content;
    min-width: 300px;
    height: 100px;
    background-image: url('@/assets/images/bg-detail-board3.png');
    background-size: 100% 100% ;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    gap:20px;
    cursor: pointer;

    .left {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img{
        height: 95%;
      }
    }

    .right {
      flex:1;
      min-width: fit-content;
      display: flex;
      flex-direction: column;
      gap:10px;
      justify-content: center;
      .algName {
        font-size: 16px;
        font-weight: bold;
      }
      .companyName {
        font-size: 14px;
      }
    }
  }
}




</style>