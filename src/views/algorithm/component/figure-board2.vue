<template>
   <div class = "board-wrap">
        <div class = "left">
            <img src = "../imgs/icon-sftj.png">
        </div>
        <div class = "right">
            <div class = "board-title">{{ title }}</div>
            <div class = "board-figure">{{ displayCount }}</div>
            </div>
      
   </div>
</template>

<script setup>

const displayCount = ref(0)
const props = defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    figure: {
        type: Number,
        default: '默认图示内容'
    }
});



const startAnimation = (start = 0, end = 0, duration = 2000) => {
  const startTime = performance.now()

  const animate = (currentTime) => {
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    displayCount.value = Math.floor(progress * (end - start) + start)

    if (timeElapsed < duration) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}
watch(
  () => props.figure,
  (newFigure) => {
    //duration = log(newFigure*20,2) 
    startAnimation(0, newFigure, Math.log(newFigure) * 200);
  },
  {
    immediate: true // 立即触发一次，如果 figure 已经有值
  }
)
</script>

<style lang="scss" scoped>
.board-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-image: url("../imgs/bg-figure-board2.png");
    background-size: 100% 100%;
}

.left {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5%;
    img{
        height: 100%;
        width: auto;
    }
}   
.right {
    flex:1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .board-title {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        text-shadow: rgba(30,198,255,0.8) 0px 0px 20px;
    }
    .board-figure{
        font-size: 32px;
        font-weight: bold;
        color: transparent;
        background: linear-gradient(to bottom, white, #b2ebff, #0dcaf0);
        -webkit-background-clip: text;
        background-clip: text;
    }
}
</style>
