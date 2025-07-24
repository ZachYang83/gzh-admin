<template>
  <div class="cj-table-wrap">
    <div class="main-title">
      <Tybtl title="专家人才" :isHome="true"></Tybtl>
    </div>

    <div class="menu">
      <div class="search-box">
        <input
          v-model="currentKeyword"
          type="text"
          placeholder="请输入专家名称或所属机构"
          class="input-box"
          @keyup.enter="multiSearch(activeTab, currentKeyword, currentPage)"
        />
        <button
          class="search-btn"
          @click="multiSearch(activeTab, currentKeyword, currentPage)"
        >
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
      </div>
      <div class="menu-items">
        所属院所：
        <div
          class="menu-item"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{
            active: activeTab === item,
          }"
          @click="multiSearch(item, currentKeyword, 1)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-table">
        <BoardType3
          v-for="data in sceneData"
          :key="data.id"
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
            :size="pageSize"
            :total="totalCount"
            v-model:current-page="currentPage"
            @current-change="
              (cpage) => multiSearch(activeTab, currentKeyword, cpage)
            "
            class="pagetest"
          >
          </el-pagination>
        </div>
        <div class="cj-table-footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/expert/index.js";

defineOptions(
  {
    name: "Expert"
  }
);

const tabList = ref([
  "全部",
  "中山大学",
  "华南理工大学",
  "华南师范大学",
  "暨南大学",
  "华南农业大学",
  "广东工业大学",
  "广州大学",
  "广州南方学院",
  "香港科技大学（广州）",
  "琶洲实验室",
]);
const activeTab = ref("全部");
const totalCount = ref(0);
const sceneData = ref(null);
const pageSize = 10;
const currentPage = ref(1);
const currentKeyword = ref(null);

onMounted(() => {
  Api.getAll().then((res) => {
    let resData = res.data;
    sceneData.value = resData.list;
    totalCount.value = resData.total;
  });
});

const multiSearch = (workplace, keywords, pageNum) => {
  activeTab.value = workplace;
  Api.search({
    workplace: workplace === "全部" ? "" : workplace,
    keywords: keywords,
    pageNum: pageNum,
  }).then((res) => {
    let resData = res.data;
    sceneData.value = resData.list;
    totalCount.value = resData.total;
    currentPage.value = resData.pageNum;
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
</style>
