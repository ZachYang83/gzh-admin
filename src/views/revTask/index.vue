<template>
  <div class="cj-table-wrap">
    <div class="main-title">
      <Tybtl title="榜单列表" :isHome = "true"></Tybtl>
    </div>
    
    <div class = "menu">
      <div class = search-box>
        <input v-model="currentKeyword" type="text" placeholder="请输入关键词" class = "input-box"  @keyup.enter="searchKeywords(currentKeyword)"  ref="refElement"/>
        <button class = "search-btn" @click="searchKeywords(currentKeyword)">
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
        
      </div>
      <div class = "menu-items" >
        行业领域：
        <div class = "menu-item" v-for ="(item, index) in taskClass" :key="index" :class="{ active: activeIndex === index }" @click="switchTaskClass(item)">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content"> 
      <div class = "main-table">
        <BoardType2 v-for = "(data) in taskData" :ifimg="true" detailName="taskDetail" :id="data.id" :title=data.projName key1="预算" key2="行业领域" key3="时间" key4="发榜单位" :value1=data.projBudget :value2=data.indTechField :value3=data.projTime :value4=data.entName></BoardType2>
      </div>
      <div class = "table-footer">
        <div class = "page-btns">
          <el-pagination 
            background 
            layout="total, prev, pager, next, jumper"
            :size="pageSize" 
            :total="totalCount"  
            v-model:current-page="currentPage" 
            @current-change="(page) => filterTask(page)">
          </el-pagination>
        </div>
        <div class="cj-table-footer"></div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Api from "@/api/revTask/index.js";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute(); 
const refElement = ref(null);
const taskClass = ref(["全部", "人工智能—算法", "人工智能—大数据"]);
const activeIndex =ref(0)
const totalCount = ref(0);
const taskData = ref(null);
const currentPage = ref(1);
const pageSize = 10;
const currentKeyword = ref("");
const searchKeywords = (keyword)=> {
  console.log("搜索关键词:", keyword);
  currentKeyword.value = keyword;
  activeIndex.value = 0;
  filterTask();
};
const switchTaskClass = (item)=>{
  console.log("切换任务类别:", item);
  currentKeyword.value = "";
  activeIndex.value = taskClass.value.indexOf(item);
  filterTask();
}
const filterTask = (pageNum = 1) =>{
  currentPage.value = pageNum;
  taskData.value = null;
  if (refElement.value){
    refElement.value.blur();
  }
  //不支持同时关键词和场景查询
  if(currentKeyword.value){
    console.log("当前关键词:", currentKeyword.value);
    Api.getListByKeywords({ 
      keywords: currentKeyword.value,
      pageNum: currentPage.value,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      taskData.value = resData.list;
      totalCount.value = resData.total;
    });
  }else{
    console.log("当前任务类别:", taskClass.value[activeIndex.value]);
    Api.getListByClass({ 
      indTechField: taskClass.value[activeIndex.value] === "全部" ? "" : taskClass.value[activeIndex.value],
      pageNum: currentPage.value,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      taskData.value = resData.list;
      totalCount.value = resData.total;
    });
  }
}

onMounted(() => {
    activeIndex.value = 0;
    filterTask();
});
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
  gap: 10px;
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
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-table {
  height:92%;
  width: 80%;
  //display: grid;
  // grid-template-columns: repeat(3, 1fr); /* 3列，每列等宽 */
  // grid-template-rows: repeat(3, 1fr);
  // grid-gap: 20px;
  // padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items:flex-start;
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
