<template>
  <div class="policy-wrap">
    <div class="main-title">
      <Tybtl title="政策法规" :isHome="true"></Tybtl>
    </div>
    <div class="menu">
      <div class="search-box">
        <el-input
          v-model="currentKeyword"
          class="input-box"
          placeholder="请输入关键词"
          clearable
          @keydown="multiSearch(activeLevel, activeField, currentKeyword)"
          @clear="multiSearch(activeLevel, activeField, currentKeyword)"
        />
        <button class="search-btn" @click="multiSearch(activeLevel,activeField,currentKeyword)">
          <svg-icon icon-class="search" size="1.2rem"></svg-icon>
          查询
        </button>
      </div>
      <div class="menu-items">
        政策级别：
        <div
          class="menu-item"
          v-for="(item, index) in policyLevel"
          :key="index"
          :class="{ active: activeLevel === item }"
          @click="multiSearch(item, activeField, currentKeyword)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="menu-items">
        政策类型：
        <div
          class="menu-item"
          v-for="(item, index) in policyField"
          :key="index"
          :class="{ active: activeField === item }"
          @click="multiSearch(activeLevel, item, currentKeyword)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="main-table">
        <BoardType4
          v-for="data in policyData"
          :id="data.id"
          :title="data.policyName"
          :lable="data.level"
          :releaseDate="data.releaseDate"
          :publisher="data.publisher"
          :webLink="data.webLink"
        ></BoardType4>
      </div>
      <div class="table-footer">
        <div class="page-btns">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            v-model:page-size="pageSize"
            :total="totalCount"
            v-model:current-page="currentPage"
            @current-change="
              (cpage) =>
                multiSearch(activeLevel, activeField, currentKeyword, cpage)
            "
            class="pagetest"
          >
          </el-pagination>
        </div>
        <div class="policy-table-footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/policy/index.js";
import { onMounted } from "vue";

defineOptions({
  name: "Policy",
});

const policyField = ref([
  "全部",
  "产业发展",
  "基础设施",
  "技术研发",
  "标准规范",
  "其他",
]);
const policyLevel = ref([
  "全部",
  "全国",
  "广东省",
  "广州市",
  "广州各区",
  "其他省市",
]);
const activeField = ref("全部");
const activeLevel = ref("全部");
const totalCount = ref(0);
const policyData = ref(null);
const pageSize = ref(5);
const currentPage = ref(1);
const currentKeyword = ref(null);

onMounted(() => {
  getAllPolicy();
});

const getAllPolicy = () => {
  Api.getAll().then((res) => {
    let resData = res.data;
    policyData.value = resData.list;
    totalCount.value = resData.total;
  });
};

const multiSearch = (level, field, keywords, pageNum = 1) => {
  activeLevel.value = level;
  activeField.value = field;
  let q_level = level === "全部" ? "" : level;
  let q_field = field === "全部" ? "" : field;
  Api.search({
    level: q_level,
    field: q_field,
    keywords: keywords,
    pageNum: pageNum,
  }).then((res) => {
    let resData = res.data;
    policyData.value = resData.list;
    totalCount.value = resData.total;
  });
};
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
  height: 50px;
}

.menu {
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-box {
  width: 60%;
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
  gap: 30px;
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
  margin-top: 5px;
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-table {
  height: 92%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;

}

.table-footer {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #f8f9fa;
}

:deep(.el-input__inner) {
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 3px;
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
