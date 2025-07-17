<template>
  <div class="bt-wrap">
    <div class="back-icon">
      <svg-icon
        icon-class="arrow-back"
        class="svg-icon"
        size="3em"
        @click="goBack()"
        v-if="!isHome"
      />
    </div>
    <div class="title-text">
      {{ title }}<span @click = "goToLink()">{{ attachment }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    default: "页面标题",
  },
  isHome: {
    type: Boolean,
    default: false,
  },
  attachment: {
    type: String,
    default: "",
  },
  attachmentLink: {
    type: String,
    default: "",
  },
});

const goBack = () => {
  router.back();
  //router.push({ name: 'Scene' })
};

const goToLink = () => {
  if (props.attachmentLink) {
    router.push({ name: props.attachmentLink });
  } 
};

</script>

<style lang="scss" scoped>
.bt-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.back-icon {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.title-text {
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 36px;
  color: #d8f0ff;
  font-family: ALIBABAPUHUITI;
  
  span{
    margin-left: 10px;
    font-size: 14px;
    transform: translateY(9px);
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
