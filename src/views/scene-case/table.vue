<template>
  <div class = "cj-table-wrap">
    <div class="main-title">
      <Tybtl title="应用场景列表"></Tybtl>
    </div>
    <div class="main-content">
      <div class = "left">
        <div class = "menu">
          <div class = search-box>
            <input type="text" placeholder="请输入关键词" class = "input-box"/>
            <button class = "search-btn" @click="goToDetail('./detail')">
              <svg-icon icon-class="search" size="1.2rem"></svg-icon>
              查询
            </button>
            
          </div>
          <div class = "menu-title">行业领域：</div>
          <div class = "menu-items" >
            <div class = "menu-item" v-for ="(item, index) in scenes" :key="index" :class="{ active: activeIndex === index }" @click="filterScene(item)">
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class = "right">
        <div class = "cj-table">
          <BoardType1 v-for = "n in 8" ></BoardType1>
        </div>
        <div class = "cj-table-footer">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import common from "common";
import {ref} from "vue";
import BoardType1 from "../../components/common/board/board-type1.vue";
const { toPage } = common();
import Api from "@/api/scene/index.js";
const props = defineProps(['kind'])

const goToDetail = (path) => {
  toPage(path);
};
const scenes = ref(["全部", "智能制造", "医药健康", "综合交通", "能源环保", "城市治理", "政务服务", "现代服务业", "消费", "其他"]);
<<<<<<< HEAD
const activeIndex = ref(0);
const filterScene = (item) => {
  console.log(scenes.value.indexOf(item));
  activeIndex.value = scenes.value.indexOf(item);
};
=======

onMounted(() => {
  // 获取场景
  Api.getByClass({'scene_class':props.kind}).then((res) => {
    let resData = res.data;
    console.log(resData,'res');
  });
});
>>>>>>> dev-yzh
</script>

<style lang="scss" scoped>
.cj-table-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-title{
  width: 100%;
  height: 70px;
}

.main-content {
  width: 100%;
  height: calc(100% - 70px);
  padding: 1% 5%;
  display: flex;
  flex-direction: row;
}
.left {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
}



.menu {
  width: 80%;
  height:fit-content;
  background: linear-gradient(to bottom, rgba(39,115,255,0.1), rgba(0,90,255,0.2));
  border: 1px solid rgba(0, 170, 255, 1);
  border-image: linear-gradient(0deg, rgba(0, 213, 255, 1) 0%, rgba(0, 132, 255, 1) 100%) 30;
  
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-box {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
}
.input-box {
  flex: 1;
  margin-right:20px;//露出右边圆角
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid rgb(255, 255, 255);
  border-radius: 4px;
  border-image: linear-gradient(20deg, rgb(42, 152, 255) 30%, rgb(203, 230, 255) 35%, rgba(10, 137, 255) 40%) 1/3px;
  
}
.search-btn {
  position: absolute;
  right:0;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:5px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.menu-title {
  font-size: 16px;
  font-weight:500;
}

.menu-items{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.menu-item{
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
.menu-item.active{
  background-color: #e0f7fa;
  color: #007bff;
}

.right {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  
}

.cj-table {
  height:100%;
  width: 100%;
  background-color: #1e7bd8;
}


.cj-table-footer {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}
</style>
