<template>
    <div class = "policy-wrap">
        <div class="main-title">
            <Tybtl title = "政策法规"  :isHome = "true"></Tybtl>
        </div>
        <div class = "menu">
            <div class = search-box>
                <input v-model="currentKeyword" type="text" placeholder="请输入关键词" class = "input-box" @keyup.enter="searchKeywords(currentKeyword)"/>
                <button class = "search-btn" @click="searchKeywords(currentKeyword)">
                <svg-icon icon-class="search" size="1.2rem"></svg-icon>
                查询
                </button>
                
            </div>
            <div class = "menu-items" >
                政策级别：
                <div class = "menu-item" v-for ="(item, index) in policyClasses" :key="index" :class="{ active: (route.query.policyClass === undefined || route.query.policyClass === '' || route.query.policyClass.slice(0,2) === '全部') ? ('全部' === item) : (route.query.policyClass === item)}" @click="changeScene(item)">
                <span>{{ item }}</span>
                </div>
            </div>
            <div class = "menu-items" >
                政策类型：
                <div class = "menu-item" v-for ="(item, index) in policyTypes" :key="index" :class="{ active: (route.query.policyClass === undefined || route.query.policyClass === '' || route.query.policyClass.slice(0,2) === '全部') ? ('全部' === item) : (route.query.policyClass === item)}" @click="changeScene(item)">
                <span>{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="main-content">  
            <div class = "main-table">
                <BoardType4 v-for = "(data) in policyData" :id="data.id" :title=data.projectName key1="支持单位" key2="行业领域" key3="简介" :value1=data.supportingUnit :value2=data.policyClass :value3=data.discription></BoardType4>
            </div>
            <div class = "table-footer">
                <div class = "page-btns">
                <el-pagination
                    background
                    layout="total, prev, pager, next, jumper"
                    :size="pageSize" :total="totalCount"  
                    v-model:current-Page="currentPage"
                    @current-change="(cpage) => goToTable(route.query.policyClass, route.query.keyword, cpage)" 
                    class = "pagetest">
                </el-pagination>
                </div>
                <div class="policy-table-footer"></div>
            </div>
        </div>
    
    </div>

</template>

<script setup>
import Api from "@/api/scene/index.js";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute(); 
const { policyClass = '全部', keyword = '', page = '1' } = route.query;
const policyTypes = ref([]);
const policyClasses = ref([]);
const totalCount = ref(0);
const policyData = ref(null);
const pageSize = 5;
const currentPage = ref(1);
const currentKeyword = ref(null);
const getData = (policyClass="", keyword = "", page=1) =>{
  //不支持同时关键词和场景查询
  page = parseInt(page);
  // console.log("获取数据：", policyClass, keyword, page);
  if(keyword){
    Api.getByKeywords({ 
      keywords: keyword,
      pageNum: page,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      policyData.value = resData.list;
      totalCount.value = resData.total;
    });
  }else{
    if (policyClass.slice(0,2) === "全部"){
      policyClass = "";
    }
    Api.getByClass({ 
      scene_class: policyClass,
      pageNum: page,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      policyData.value = resData.list;
      totalCount.value = resData.total;
    });
  }
}

onMounted(() => {
  // 获取场景，换成接口获取
  // Api.getAll().then((res) => {
  //   let resData = res.data;
  // });
  policyClasses.value = ["全部", "国家级", "广东省", "广州", "深圳", "上海", "北京", "成都", "杭州", "武汉", "重庆", "苏州", "现代农业"];
  policyTypes.value = ["全部", "标准规范","产业发展","基础设施","技术研发","其他"];
});

const goToTable = (newScene = policyClass, newKeyword = keyword, newPage = page) => {
  console.log("跳转参数：",policyClass,"-",keyword,"-",page);
  router.replace({
    name: "sceneTable",
    query: {
      policyClass: newScene,
      keyword: newKeyword,
      page: newPage
    },
  });
};

const changeScene = (scene) => {
  // console.log("切换场景：", scene);
  currentKeyword.value = "";
  goToTable(scene, "", 1);
};

const searchKeywords = (keyword) => {
  // console.log("搜索关键词：", keyword);
  goToTable("", keyword, 1);
};


watch(() => [route.query.policyClass, route.query.keyword, route.query.page], ([policyClass, keyword, page]) => {
  // console.log("监听到变化，重新获取数据：", policyClass, keyword, page);
  getData(policyClass, keyword, page);
  currentPage.value = Number(page) || 1;
  currentKeyword.value = keyword || "";

}, { immediate: true });
</script>

<style lang="scss" scoped>
input {
  color: #fff;
  font-size: 16px;
}

.policy-wrap {
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
}
.main-title {
  width: 100%;
  height: 70px;
}

.menu {
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-box {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  
  margin-top: 1%;
}
.input-box {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 4px;
  border-image: linear-gradient(20deg, rgb(42, 152, 255) 30%, rgb(203, 230, 255) 35%, rgba(10, 137, 255) 40%) 1/2px;
  position: relative;
}

.search-btn {
  position: absolute;
  right: 0;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.menu-items{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  color: #D8F0FF;
  font-size: 16px;
}

.menu-item {
  padding: 6px 12px;
  //background-color: #e0f7fa;
  //border-radius: 4px;
  cursor: pointer;
  white-space: nowrap; /* 防止文字换行 */
  border-radius: 4px;
}

.menu-item:hover {
  background-color: #e0f7fa;
  color: #007bff;
}
.menu-item.active {
  background-color: #e0f7fa;
  color: #007bff;
}

.main-content {
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-table {
  height:92%;
  width: 100%;
  //display: grid;
  // grid-template-columns: repeat(3, 1fr); /* 3列，每列等宽 */
  // grid-template-rows: repeat(3, 1fr);
  // grid-gap: 20px;
  //padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
}


.table-footer {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #f8f9fa;
}
</style>

