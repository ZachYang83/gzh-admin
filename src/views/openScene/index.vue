<template>
  <div class="cjkf-table-wrap">
    <div class="main-title">
      <Tybtl title="国资场景" :isHome="true"></Tybtl>
    </div>

    <div class="menu">
      <div class="search-box">
        <el-input
          v-model="searchObj.keywords"
          class="input-box"
          placeholder="请输入关键词"
          clearable
          @keydown="multiSearch({ keywords: searchObj.keywords })"
          @clear="multiSearch({ keywords: searchObj.keywords })"
        />
        <button
          class="search-btn"
          @click="multiSearch({ keywords: searchObj.keywords })"
        >
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
      </div>
      <div class="menu-items">
        行业领域：
        <div
          class="menu-item"
          v-for="(item, index) in fieldList"
          :key="index"
          :class="{ active: searchObj.scene_class === item }"
          @click="multiSearch({ scene_class: item })"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-table">
        <BoardType2
          v-for="data in sceneData"
          :key="data.id"
          :ifimg="true"
          detailName="taskDetail"
          :id="data.id"
          :title="data.projectName"
          key2="行业领域"
          key3="所属集团"
          key4="业主单位"
          :value2="data.sceneClass"
          :value3="data.groupName"
          :value4="data.companyName"
        ></BoardType2>
      </div>
      <div class="table-footer">
        <div class="page-btns">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :size="pageSize"
            :total="totalCount"
            v-model:current-page="searchObj.pageNum"
            @current-change="(page) => multiSearch({ pageNum: page })"
            class="pagetest"
          >
          </el-pagination>
        </div>
        <div class="cjkf-table-footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/openScene/index.js";
const fieldList = ref([
  "全部",
  "AI+制造",
  "AI+能源环保",
  "AI+交通",
  "AI+旅游休闲",
  "AI+城市治理",
]);
const totalCount = ref(0);
const sceneData = ref(null);
const pageSize = 9;
const searchObj = {
  scene_class: "全部",
  keywords: "",
  pageNum: 1,
};

onMounted(() => {
  multiSearch(searchObj);
});

const multiSearch = (params) => {
  if (params.scene_class) {
    searchObj.scene_class = params.scene_class;
  }
  if (params.keywords) {
    searchObj.keywords = params.keywords;
  }
  if (params.pageNum) {
    searchObj.pageNum = params.pageNum;
  }
  Api.search(searchObj).then((res) => {
    let resData = res.data;
    sceneData.value = resData.list;
    totalCount.value = resData.total;
  });
};
</script>

<style lang="scss" scoped>
input {
  color: #fff;
  font-size: 16px;
}

.cjkf-table-wrap {
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
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 5px;
}

.search-btn {
  position: absolute;
  right: -95px;
  width: 100px;
  height: 100%;
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
:deep(.input-box .el-input__inner) {
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 2.5px;
  border-style: solid;
  border-radius: 4px;
  border-image: linear-gradient(
      20deg,
      rgb(42, 152, 255) 30%,
      rgb(203, 230, 255) 35%,
      rgba(10, 137, 255) 40%
    )
    1;
  box-shadow: none;
  color: #d8f0ff;
  font-size: 16px;
}
</style>
