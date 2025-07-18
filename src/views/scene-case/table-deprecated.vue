<template>
  <div class="cj-table-wrap">
    <div class="main-title">
      <Tybtl title="应用场景列表"></Tybtl>
    </div>
    
    <div class = "menu">
      <div class = search-box>
        <input v-model="currentKeyword" type="text" placeholder="请输入关键词" class = "input-box" @keyup.enter="searchKeywords(currentKeyword)" ref="refElement"/>
        <button class = "search-btn" @click="searchKeywords(currentKeyword)">
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
        
      </div>
      <div class = "menu-items" >
        行业领域：
        <div class = "menu-item" v-for ="(item, index) in scenes" :key="index" :class="{ active: activeIndex === index }" @click="goToTable(item)">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">  
      <div class = "main-table">
        <BoardType1 v-for = "(data) in sceneData" :id="data.id" :title=data.projectName key1="支持单位" key2="行业领域" key3="简介" :value1=data.supportingUnit :value2=data.sceneClass :value3=data.discription></BoardType1>
      </div>
      <div class = "table-footer">
        <div class = "page-btns">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :size="pageSize" :total="totalCount"  
            v-model:current-page="currentPage" 
            @current-change="(page) => filterScene(page)" 
            class = "pagetest">
          </el-pagination>
        </div>
        <div class="cj-table-footer"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BoardType1 from "../../components/common/board/board-type1.vue";
import Api from "@/api/scene/index.js";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute(); 
const props = defineProps(['sceneClass'])

const scenes = ref(["全部", "智能制造", "医药健康", "综合交通", "能源环保", "城市治理", "教育教学", "政务服务", "商贸流通", "数字创意", "智能办公", "智能安防", "现代农业"]);
const activeIndex =ref(0)
const totalCount = ref(0);
const sceneData = ref(null);
const currentPage = ref(1);
const pageSize = 9;
const currentKeyword = ref("");
const refElement = ref(null);

const searchKeywords = (keyword)=> {
  console.log("搜索关键词:", keyword);
  currentKeyword.value = keyword;
  activeIndex.value = 0;
  filterScene();
};
const switchSceneClass = (item)=>{
  console.log("切换场景类别:", item);
  currentKeyword.value = "";
  activeIndex.value = scenes.value.indexOf(item);
  filterScene();
}
const filterScene = (pageNum = 1) =>{
  currentPage.value = pageNum;
  if (refElement.value){
    refElement.value.blur();
  }
  //不支持同时关键词和场景查询
  if(currentKeyword.value){
    console.log("当前关键词:", currentKeyword.value);
    Api.getByKeywords({ 
      keywords: currentKeyword.value,
      pageNum: currentPage.value,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      sceneData.value = resData.list;
      totalCount.value = resData.total;
    });
  }else{
    console.log("当前场景类别:", scenes.value[activeIndex.value]);
    Api.getByClass({ 
      scene_class: scenes.value[activeIndex.value],
      pageNum: currentPage.value,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      sceneData.value = resData.list;
      totalCount.value = resData.total;
    });
  }
}

watch(() => route.query.sceneClass, (newVal) => {
  if (newVal) {
    let sceneClass = newVal;
    if(sceneClass.slice(0, 2) === "全部"){
      activeIndex.value = 0;
      filterScene();
    } else if (scenes.value.includes(sceneClass)) {
      activeIndex.value = scenes.value.indexOf(sceneClass);
      filterScene();
    } else {
      console.error(newVal, 'not in scenes!!!!!');
    }
  }
}, { immediate: true });

// onMounted(() => {
//   // 获取场景
//   if(route.query.sceneClass){
//     let sceneClass = route.query.sceneClass;
//     if(sceneClass === "全部场景"){
//       sceneClass = "全部";
//     }
//     activeIndex.value = scenes.value.indexOf(sceneClass);
//     filterScene();
//     }else{
//     console.error(route.query.sceneClass, 'not in scenes!!!!!');
//     }
// });


const goToTable = (title) => {
  router.push({
    name: "scenceTable",
    query: {
      sceneClass: title,
    },
  });
};
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
  padding: 0 5%;
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
// .page-btns {
// }

// :deep(li) {
//   background-color: #d6be34;
//   border:#007bff 1px solid;
// }
</style>
