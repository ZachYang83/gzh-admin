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
        <div class = "title" v-for="(title,index) in title_list"  :class="{ chosen: title_list.indexOf(title) === title_index }" @click = "goToLink(index)">
            {{ title }}
        </div>
      
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title_list: {
    type: Array,
    default: () => ["社会场景","国资场景"],
  },
  link_list: {
    type: Array,
    default: () => [],
  },
  title_index: {
    type: Number,
    default: 0,
  },

  isHome: {
    type: Boolean,
    default: false,
  },
});

const goBack = () => {
  router.back();
  //router.push({ name: 'Scene' })
};

const goToLink = (index) => {
    console.log(index)
  if (props.link_list) {
    router.push({ name: props.link_list[index] });
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
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.title-text {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 32px;
  color: #d8f0ff;
  font-family: ALIBABAPUHUITI;
  
//   span{
//     margin-left: 10px;
//     font-size: 14px;
//     transform: translateY(9px);
//     cursor: pointer;
//     &:hover{
//       text-decoration: underline;
//     }
//   }
}

.title{
    margin-right: 20px;
    cursor: pointer;
    opacity: 0.6;
    position: relative;
    background-image: url(@/assets/images/bg-button3.png);
    background-size: 100% 100%;
    padding: 5px 15px;
}
.title.chosen{
    transform: translateY(-2px);
    //color:#F6912C;
    opacity: 1;
    //text-shadow: 0 2px 10px #F6912C ;
}
.title.chosen::before{
    position: absolute;
    content:  url("@/assets/icons/dianzhui-left.svg");
    bottom: 9px;
    left: -1px
    //background-color: #512cf6;
}
.title.chosen::after{
    position: absolute;
    content:  url("@/assets/icons/dianzhui-right.svg");
    bottom: 9px;
    right: -1px;
}
</style>
