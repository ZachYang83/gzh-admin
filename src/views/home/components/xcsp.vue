<template>
  <div class="xcsp-wrap flex-center">
    <video class="video" src="../imgs/gz-xcsp.mp4" controls></video>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.xcsp-wrap {
  width: 100%;
  height: 100%;
  //background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.video{
  width: 95%;
  height: 95%;
  object-fit: cover;
}
</style>
