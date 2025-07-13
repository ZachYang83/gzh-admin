<template>
   <div class="board-wrap">
        <div class="title">
            <span>{{ title }}</span>
            <div class = "btn" @click="goToTable(title)">全部>></div>
        </div>
        <div class="intro">
            <svg-icon icon-class="corner1" size = 0.6rem class="topleft"></svg-icon>
            {{ intro }}
            <svg-icon icon-class="corner1" size = 0.6rem class="bottomright"></svg-icon>
        </div>
        <div class="board-list">
            <div 
                v-for="(item, index) in props.data" 
                :key="item.id" 
                class="board-item"
                @click="goToDetail(item.id)"
            >
                <div class="item-title" >{{ item.projectName }}</div>
                <div class="item-content">{{ item.supportingUnit }}</div>
            </div>
        </div>
   </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// 跳转方法
const goToTable = (title) => {
  // toPage("./table");
  router.push({
    name: "scenceTable",
    query: {
      kind: title,
    },
  });
};
const props = defineProps({
    title: {
        type: String,
        default: "场景板块标题",
    },
    intro: {
        type: String,
        default: "这是一段100字的场景板块简介，这是一段80字的场景板块简介，这是一段100字的场景板块简介，这是一段100字的场景板块简介，这是一段",
    },
    target: {
        type: String,
        default: "./table",
    },
    data: {
        type: Array,
        default: () => [
        ],
    },
});


const goToDetail = (id) => {    
  router.push({
    name: "sceneDetail",
    query: {
      id: id,
    },
  });
};

</script>

<style scoped>

.board-wrap {
    position: relative;
    height: 100%;
    flex:0 0 23.5%;
    padding: 10px;
    background: linear-gradient(to bottom, rgba(204,226,255,0.2), rgba(0,91,219,0.4)),
                url(../imgs/bg-list-cj.png) center;
    border: 1px solid rgba(0, 170, 255, 1);
    border-image: linear-gradient(0deg, rgba(0, 213, 255, 1) 0%, rgba(0, 132, 255, 1) 100%) 30;
    border-radius:4px;
    display: flex;
    flex-direction: column;
}

.title{
    width:100%;
    height:30px;
    padding:5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    align-items: center;
    cursor: pointer;
    span {
        font-size: 20px;
        font-weight: bold;
    }
}

.intro {
    position: relative;
    height: 70px;
    margin-top: 10px;
    padding: 8px 15px;
}

.topleft, .bottomright {
    position: absolute;
}

.topleft {
    top: 0; left: 0;
}

.bottomright {
    bottom: 0; right: 0;
    transform: rotate(180deg);
}

.board-list {
    width: 100%;
    /*height: calc(100% - 140px);  减去标题和简介的高度 */
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    /*隐藏滑动条*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    gap: 1.5%;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari 和 Opera */
    }
}
.board-item {
    scroll-snap-align: start;
    flex: 0 0 23.5%;
    width:100%;
    padding: 15px;
    border: 1px solid rgba(140,194,255,0.36);
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(4px);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    
}
.board-item:hover {
    background-color: rgba(255,255,255,0.3);
}

.item-title {
    font-weight: bold;
    font-size: 16px;
}
.item-content {
    margin-top: 10px;
    font-size: 14px;
}
.more {
    width: 100%;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
</style>