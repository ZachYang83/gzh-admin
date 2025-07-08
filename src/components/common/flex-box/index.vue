<template>
  <div class="card-box flex-center">
    <div class="card-body">
      <div class="card-title">
        <svg-icon icon-class="dianzhui-left" class="svg-icon" size="1rem" />
        <span>{{ title }}</span>
        <svg-icon icon-class="dianzhui-right" class="svg-icon" size="1rem" />
      </div>
      <div class="card-content">
        <slot name="content">
          <!-- 默认内容 -->
          <div class="default-content"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flexBox",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    title: {
      type: String,
      default: "发展概况",
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: ALIBABAPUHUITI;
  src: url("@/assets/font/ALIBABAPUHUITI.TTF");
}
.card-box {
  width: v-bind(width);
  height: v-bind(height);
  box-sizing: border-box;
  font-family: ALIBABAPUHUITI;
}

.card-body {
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid rgba(42, 130, 228, 0.3);
  background: rgba(48, 97, 219, 0.12);
}

.card-title {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding-left: 10px;
  background: rgba(21, 77, 160, 0.3);
}

.card-content{
  width: 100%;
  height: calc(100% - 35px);
}

.card-title::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 35px;
  background-color: #1977e5;
  left: 0px;
  top: 0px;
}

.card-title span {
  color: #d8f0ff;
  text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
    0px 0px 10px rgba(0, 145, 255, 0.5);
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
  background: url("@/assets/images/title-bg.png") no-repeat;
}

.default-content {
 
}
</style>
