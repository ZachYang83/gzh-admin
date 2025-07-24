<template>
  <div class="cj-table-wrap">
    <div class="main-title">
      <Tybtl title="专家人才" :isHome="true"></Tybtl>
    </div>

    <div class="menu">
      <div class="search-box">
        <input v-model="currentKeyword" type="text" placeholder="请输入专家名称或所属机构" class = "input-box" @keyup.enter="searchKeywords(currentKeyword)"/>
        <button class = "search-btn" @click="searchKeywords(currentKeyword)">
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
      </div>
      <div class="menu-items">
        所属院所：
        <div class = "menu-item" v-for ="(item, index) in scenes" :key="index" :class="{ active: (route.query.workplace === undefined || route.query.workplace === '' || route.query.workplace.slice(0,2) === '全部') ? ('全部' === item) : (route.query.workplace === item)}" @click="changeScene(item)">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-table">
        <BoardType3
          v-for="data in sceneData"
          detailName="ExpertDetail"
          :id="data.id"
          :name="data.name"
          :key1="'所属院所'"
          :value1="data.workplace"
          :key2="'职称'"
          :value2="data.position"
          :key3="'研究领域'"
          :value3="data.field"
        ></BoardType3>
      </div>
      <div class="table-footer">
        <div class="page-btns">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :size="pageSize" :total="totalCount"  
            v-model:current-page="currentPage"
            @current-change="(cpage) => goToTable(route.query.workplace, route.query.keyword, cpage)" 
            class = "pagetest">
          </el-pagination>
        </div>
        <div class="cj-table-footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/expert/index.js";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute(); 
const { sceneClass = '全部', keyword = '', page = '1' } = route.query;

const scenes = ref(["全部", "中山大学","华南理工大学","华南师范大学","暨南大学","华南农业大学","广东工业大学","广州大学","广州南方学院","香港科技大学（广州）","琶洲实验室"]);
const totalCount = ref(0);
const sceneData = ref(null);
const pageSize = 10;
const currentPage = ref(1);
const currentKeyword = ref(null);
const getData = (sceneClass="", keyword = "", page=1) =>{
  page = parseInt(page);
  if(keyword){
    Api.getByKeywords({ 
      keywords: keyword,
      pageNum: page,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      sceneData.value = resData.list;
      totalCount.value = resData.total;
    });
  }else{
    if (sceneClass.slice(0,2) === "全部"){
      sceneClass = "";
    }
    Api.getByClass({ 
      workplace: sceneClass,
      pageNum: page,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      sceneData.value = resData.list;
      totalCount.value = resData.total;
    });
  }
}

const goToTable = (newScene = sceneClass, newKeyword = keyword, newPage = page) => {
  router.replace({
    name: "Expert",
    query: {
      workplace: newScene,
      keyword: newKeyword,
      page: newPage
    },
  });
};

const changeScene = (scene) => {
  currentKeyword.value = "";
  goToTable(scene, "", 1);
};




const searchKeywords = (keyword) => {
  goToTable("", keyword, 1);
};


watch(() => [route.query.workplace, route.query.keyword, route.query.page], ([workplace, keyword, page]) => {
  getData(workplace, keyword, page);
  currentPage.value = Number(page) || 1;
}, { immediate: true });
</script>

<style lang="scss" scoped>
input {
  color: #fff;
  font-size: 16px;
}

.cj-table-wrap {
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
  height: 50px;
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
  border-image: linear-gradient(
      20deg,
      rgb(42, 152, 255) 30%,
      rgb(203, 230, 255) 35%,
      rgba(10, 137, 255) 40%
    )
    1/2px;
}
.search-btn {
  position: absolute;
  right: 0;
  height: 100%;
  width: 110px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #d8f0ff;
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
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-table {
  height: 92%;
  width: 80%;
  //display: grid;
  // grid-template-columns: repeat(3, 1fr); /* 3列，每列等宽 */
  // grid-template-rows: repeat(3, 1fr);
  // grid-gap: 20px;
  // padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.table-footer {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #f8f9fa;
}
.page-btns {
}
</style>
