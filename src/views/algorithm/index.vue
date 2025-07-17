<template>
    <div class = "alg-wrap">
        <div class = "alg-header">
            <!-- <tybtl title="算法超市" :isHome="true"></tybtl> -->
        </div>
        <div class = "alg-figure-wrap">
            <figure-board2 title="总数量" :figure="totalCount"></figure-board2>
            <figure-board2 title="算法数量" :figure="algCount"></figure-board2>
            <figure-board2 title="大模型数量" :figure="modelCount"></figure-board2>
        </div>

        <div class = "alg-table-filter">
            <div class = "filters">
                <el-select v-model="filingTypeSelect" placeholder="请选择" @change="() => filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)">
                    <el-option v-for="item in filingType" :key="item" :label="item" :value="item"></el-option>
                </el-select>

                <el-select v-model="categoriesSelect" placeholder="请选择" @change="() => filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)">
                    <el-option v-for="item in categories" :key="item" :label="item" :value="item"></el-option>
                </el-select>

                <el-select v-model="filingMonthSelect" placeholder="请选择" @change="() => filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)">
                    <el-option v-for="item in filingMonth" :key="item" :label="item" :value="item"></el-option>
                </el-select>

                <el-select v-model="regionsSelect" placeholder="请选择" @change="() => filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)">
                    <el-option v-for="item in regions" :key="item" :label="item" :value="item"></el-option>
                </el-select>

                <el-select v-model="sortOrderSelect" placeholder="请选择" @change="() => filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)">
                    <el-option v-for="item in sortOrder" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <div class = "reset" @click="reset()">
                    <!-- <svg-icon icon-class="icon-reset" size="60%"></svg-icon> -->
                    重置
                </div>
            </div>
            <div class = search-box>
                <input v-model = "currentKeyword" type="text" placeholder="请输入关键词" class = "input-box" @keyup.enter="filterAlg(currentPage = 1)" :ref="(el) => refElements.push(el)"/>
                <button class = "search-btn" @click="filterAlg(currentPage = 1)">
                <svg-icon icon-class="search" size="1rem"></svg-icon>
                查询
                </button>
            </div>
        </div>
        <div class = "alg-thead-wrap">
            <table class="alg-table">
                <thead>
                    <tr>
                    <th style="width: 20%">名称</th>
                    <th style="width: 8%">类型</th>
                    <th style="width: 20%">提供方</th>
                    <th style="width: 25%">应用名称</th>
                    <th style="width: 10%">备案日期</th>
                    <th style="width: 8%">操作</th>
                    </tr>
                </thead>

            </table>
        </div>
        <div class = "alg-table-wrap">
            <table  class="alg-table">
                <tbody>
                    <tr
                    v-for="(row, index) in algData"
                    :key="row.id"
                    :class="['table-row', { odd: index % 2 === 0 }]"
                    >
                    <td style="width: 20%">{{ row.productName }}</td>
                    <td style="width: 8%">{{ row.category }}</td>
                    <td style="width: 20%">{{ row.companyName }}</td>
                    <td style="width: 25%">{{ row.application }}</td>
                    <td style="width: 10%">{{ row.filingDate }}</td>
                    <td style="width: 8%">
                        <p @click.stop="goToDetail(row.id)">查看详情</p>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="alg-footer-wrap">
            <el-pagination
                background
                layout="total,  prev, pager, next, jumper"
                :size="pageSize"
                :total="itemCount"
                v-model:current-page="currentPage" 
                @current-change="() => filterAlg()">
            </el-pagination>
        </div>
    </div>


</template>

<script setup>
import figureBoard2 from './component/figure-board2.vue';
import router from "../../router";
import Api from "@/api/algorithm/index.js";
import { onMounted } from 'vue';
const currentKeyword = ref("");
const totalCount = ref(0);
const algCount = ref(0);
const modelCount = ref(0);
const currentPage = ref(1);
const pageSize = 10;
const itemCount = ref(0);
const filingType = ref(["全部", "大模型", "算法"]);
const categories = ref(["全部分类"]);
const filingMonth = ref(["全部时间"]);
const regions = ref(["全部区域"]);
const sortOrder = ref(["从新到旧", "从旧到新"]);
const filingTypeSelect = ref("全部");
const categoriesSelect = ref("全部分类");
const filingMonthSelect = ref("全部月份");
const regionsSelect = ref("全部区域");
const sortOrderSelect = ref("从新到旧");

const refElements = ref([]);
const goToDetail = (id) =>{
    router.push({
        name: "algDetail",
        query: {
            id: id,
        },
    });
}

const reset = () => {
    filingTypeSelect.value = filingType.value[0];
    categoriesSelect.value = categories.value[0];
    filingMonthSelect.value = filingMonth.value[0];
    regionsSelect.value = regions.value[0];
    sortOrderSelect.value = sortOrder.value[0];
    currentKeyword.value = "";
    currentPage.value = 1;
    filterAlg(1,true);//是否初始化为广东省
}
const algData = ref([
//   {
//     id: 1,
//     productName: "示例算法",
//     category: "大模型",
//     companyName: "示例公司",
//     application: "示例应用",
//     filingDate: "2023-10-01"
//   }
]);

const getParams = () =>{
    return {
    keywords: currentKeyword.value || "",
    pageNum: currentPage.value,
    pageSize: pageSize,
    filing_type: filingTypeSelect.value === "全部" ? "" : filingTypeSelect.value === "大模型" ? "model" : "algorithm",
    category: categoriesSelect.value.slice(0,2) === "全部" ? "" : categoriesSelect.value,
    month: filingMonthSelect.value.slice(0,2) === "全部" ? "" : filingMonthSelect.value,
    region: regionsSelect.value.slice(0,2) === "全部" ? "" : regionsSelect.value,
    sortOrder: sortOrderSelect.value === "从新到旧" ? "DESC" : "ASC"
  };
}

const filterAlg = (pageNum = currentPage.value, init = false) =>{
    if (refElements.value && refElements.value.length > 0) {
      refElements.value.forEach(el => {
        if (el) el.blur();
      });
    }
    currentPage.value = pageNum;
    console.log("当前筛选条件:", getParams());
    Api.search(getParams()).then((res) => {
        console.log("筛选结果:", res.data);
        algData.value = res.data.pageAlgo.list || [];
        itemCount.value = res.data.pageAlgo.total;
        if (init) {
            regions.value = ["全部区域"].concat(res.data.regions);
            categories.value = ["全部分类"].concat(res.data.categories);
            filingMonth.value = ["全部月份"].concat(res.data.filingDates);
            totalCount.value = res.data.totalCount;
            algCount.value = res.data.algorithmCount;
            modelCount.value = res.data.modelCount;
            //首次进入选择广东省数据
            if (regions.value.includes("广东省")) {
                regionsSelect.value = "广东省";
                filterAlg();
            } 
        }
    });
}


onMounted(() => {
    filterAlg(1, true);
});
</script>

<style lang="scss" scoped>
.alg-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
.alg-header {
    width: 100%;
    height: 70px;
}

.alg-figure-wrap {
    width: 80%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.alg-table-filter {
    margin: 20px 0;
    width: 80%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#D8F0FF;
    font-size: 16px;
}

.filters{
    height: 100%;
    width: fit-content;
    display: inherit;
    gap: 20px;
    
}
.filters .el-select {
    width: 140px;
    transition: box-shadow 0.2s ease;
    border: none;
    
    :deep(.el-input__inner) {
            background-color: rgba(255, 255, 255, 0.15);
            color: #D8F0FF;
            border: none;
            border-radius: 0px;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            padding-right: 30px; // 适配箭头图标位置
        }

    
    
    

    :deep(.el-select-dropdown) {
        background-color: rgba(255, 255, 255, 0.15);
        color:#ff0000;
        border: none;
    }
}

.reset {
    width: 60px;
    height: 40px;
    // border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: rgba(255, 255, 255, 0.15);
    background-color: #007bff;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
}
.reset:hover, .el-select:hover, .search-box:hover {
    box-shadow: 0 0 10px rgba(30,198,255,0.8);
}

.search-box {
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s ease;
}
.input-box {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 4px;
  border-image: linear-gradient(20deg, rgb(42, 152, 255) 30%, rgb(203, 230, 255) 35%, rgba(10, 137, 255) 40%) 1/2px;
  position: relative;
  color:#fff;
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

.alg-table-wrap{
    width: 80%;
    max-height: 540px;
    overflow: auto;
}
.alg-thead-wrap{
    width: 80%;
}
.alg-table {
    width: 100%;
    max-height: 100%;
    border-collapse: collapse;
}

.alg-table th, .alg-table td {
    height: 54px;
    padding-left:20px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-width:100px;// 限制单元格宽度，数值随意，似乎不影响
    p{
        cursor: pointer;
        color: #2F73F6;
        &:hover {
            text-decoration: underline;
        }
    }
}
.alg-table th {
    font-weight: bold;
    color: #D8F0FF;
    background-color: rgba(55, 105, 206, 0.1);
    height: 30px;
}

/* 交替行背景色 */
.table-row:nth-child(even) {
  background-color: rgba(49, 114, 245, 0.15);
}

.table-row:nth-child(odd) {
  background-color: rgba(0, 85, 255, 0.1);
}

.alg-footer-wrap {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>