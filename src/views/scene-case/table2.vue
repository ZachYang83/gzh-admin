<template>
  <div class="cj-table-wrap">
    <div class="main-title">
      <Tybtl title="国资应用场景列表" attachment="[切换为典型示范案例]" attachmentLink="scenceTable"></Tybtl>
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
        行业领域：
        <div class = "menu-item" v-for ="(item, index) in scenes" :key="index" :class="{ active: (props.sceneClass.slice(0,2) === '全部') ? ('全部' === item) : (props.sceneClass === item)}" @click="changeScene(item)">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">  
      <div class = "main-table">
        <BoardType1 v-for = "(data) in sceneData" :id="data.id" :title=data.projectName key1="业主单位" key2="场景类别" key3="简介" :value1=data.companyName :value2=data.sceneClass :value3=data.discription detailName="sceneDetail2"></BoardType1>
      </div>
      <div class = "table-footer">
        <div class = "page-btns">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :size="pageSize" :total="totalCount"  
            v-model:current-Page="currentPage"
            @current-change="(cpage) => goToTable(props.sceneClass, props.keyword, cpage)" 
            class = "pagetest">
          </el-pagination>
        </div>
        <div class="cj-table-footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/scene/index2.js";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute(); 
const props = defineProps({
  sceneClass:{
    type: String,
    default: "全部",
  },
  keyword:{
    type: String,
    default: ""
  },
  page:{
    type: String,
    default: "1"
  }
})

const scenes = ref([]);
const totalCount = ref(0);
const sceneData = ref(null);
const pageSize = 9;
const currentPage = ref(1);
const currentKeyword = ref(null);
const getData = (sceneClass="", keyword = "", page=1) =>{
  //不支持同时关键词和场景查询
  page = parseInt(page);
  // console.log("获取数据：", sceneClass, keyword, page);
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
      scene_class: sceneClass,
      pageNum: page,
      pageSize: pageSize
    }).then((res) => {
      let resData = res.data;
      sceneData.value = resData.list;
      totalCount.value = resData.total;
    });
  }
}

onMounted(() => {
  // 获取场景，换成接口获取
  // Api.getAll().then((res) => {
  //   let resData = res.data;
  // });
  scenes.value = ["全部", "AI+制造", "AI+能源环保", "AI+交通", "AI+旅游休闲", "AI+城市治理"];
  //getData(props.sceneClass,props.keyword,props.page);
});

const goToTable = (sceneClass=props.sceneClass, keyword = props.keyword, page=props.page) => {
  console.log("跳转参数：",sceneClass,"-",keyword,"-",props.page);
  router.push({
    name: "sceneTable2",
    query: {
      sceneClass: sceneClass,
      keyword: keyword,
      page: page
    },
  });
};

const changeScene = (scene) => {
  // console.log("切换场景：", scene);
  goToTable(scene, "", 1);
};

const searchKeywords = (keyword) => {
  // console.log("搜索关键词：", keyword);
  goToTable("", keyword, 1);
};


watch(() => [props.sceneClass, props.keyword, props.page], ([sceneClass, keyword, page]) => {
  // console.log("监听到变化，重新获取数据：", sceneClass, keyword, page);
  getData(sceneClass, keyword, page);
  currentPage.value = Number(page);
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
