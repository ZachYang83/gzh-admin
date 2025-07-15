<template>
  <div class="board-wrap">
    <img :src="img_src" alt="figure-board" />
    <div class="board-figure">
      <span>{{ displayCount }}</span
      >个
    </div>
    <div class="board-title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup name="Figureboard">
const props = defineProps({
    img_src: {
        type: String,
        default: "../imgs/icon-qbcj.png"
    },
    count: {
        type: Number,
        default: 236
    },
    title: {
        type: String,
        default: "应用场景"
    }
});
const displayCount = ref(0)
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

// 监听 props.count 变化
watch(
  () => props.count,
  (newCount) => {
    //duration = log(newCount*20,2) 
    startAnimation(0, newCount, Math.log(newCount) * 400);
  },
  {
    immediate: true // 立即触发一次，如果 count 已经有值
  }
)
</script>

<style lang="scss" scoped>
.board-wrap {
  height: 70%;
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url("../imgs/bg-figure-board.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
}
img {
  height: 50%;
  padding-top: 15%;
  padding-bottom: 5%;
}
.board-figure {
  width: 100%;
  height: 28%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: linear-gradient(to bottom, white, #b2ebff, #0dcaf0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
  font-size: 16px;
  span {
    font-size: 32px;
  }
}
.board-title {
  width: 100%;
  height: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #a7b5c6;
}
</style>
