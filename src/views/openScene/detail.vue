<template>
  <div class="detail-wrap">
    <div class="main-title">
      <Tybtl :title="projectName" :isHome="false"></Tybtl>
    </div>
    <div class="main-content">
      <div class="main-intro">
        <div class="left">
            <div class="jsmb">主要技术应用内容</div>
            <div class="jsmb-content">{{ discription }}</div>
            <!-- <div class = "units">
                <div class="unit">
                    <span>发榜方：</span>{{ entName }}
                </div>
                <div class="unit">
                    <span>所属集团：</span>{{ topGroup }}
                </div>
            </div> -->
        </div>
        <div class="right">
            <img
                src="./imgs/example-task.png"
                alt="场景详情背景图"
                class="bg-image"
            />
        </div>
        <button class="contact-trigger" @click="showContact()">
        </button>
        <div class="contact-content" v-if="isShowing">
          <div>联系方式：{{ contact }} - {{ contactNo }}</div>
          <span @click="showContact()">X</span>
        </div> 
    </div>
    <div class="sub-intro">
        <div class="sub-title">对参加或使用场景建设科技企业的要求</div>
        <div class="sub-content">
            {{ request }}
        </div>
    </div>
    <div class="sub-intro">
        <div class="sub-title">相关信息</div>
            <div class="sub-content info-content">
                <div v-for="(value, key) in otherInfo" :key="key">
                    <div class="info-key flex-center">{{ key }}</div>
                    <div class="info-value flex-center">{{ value }}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/openScene/index.js";
const route = useRoute();
const taskid = ref(10);
const entName = ref("");
const topGroup = ref("");
const projectName = ref("");
const discription = ref("");
const request = ref("");
const otherInfo = ref({
  集团名称: "",
  业主单位: "",
  资本类型: "",
  场景类别: "",
});
const contact = ref("");
const contactNo = ref("");
const isShowing = ref(false);
onMounted(() => {
  if (route.query.id) {
    taskid.value = Number(route.query.id);
  }
  // 根据id获取场景
  Api.getCaseById({ id: taskid.value }).then((res) => {
    let resData = res.data;
    // console.log(resData, "resData");
    projectName.value = resData.projectName;
    discription.value = resData.discription;
    request.value = resData.request;
    otherInfo.value = {
      集团名称: resData.groupName,
      业主单位: resData.companyName,
      资本类型: "国资",
      场景类别: resData.sceneClass,
    };
    contact.value = resData.contact;
    contactNo.value = resData.contactNo;
  });
});

const showContact = () => {
  if (contact.value) {
    isShowing.value = !isShowing.value;
  }
};



</script>

<style lang="scss" scoped>
@font-face {
  font-family: YouSheBiaoTiYuan;
  src: url("@/assets/font/YouSheBiaoTiYuan.otf");
}
.detail-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
}
.main-title {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
}

.main-intro {
  width: 100%;
  height: 400px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/bg-detail-main.png");
  background-size: 100% 100%;
  position: relative;
}

.left {
  width: 65%;
  height: 100%;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap:20px;
  .jsmb {
    font-size: 20px;
    font-weight: 600;
  }
  .jsmb-content {
    height: 300px;
    width: 100%;
    font-size: 16px;
    line-height: 2rem;
    overflow: scroll;
    /*隐藏滑动条*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .units {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    color: #d8f0ff;
    font-size: 16px;
  }

  .unit {
    width: 50%;
    span {
      font-weight: 600;
    }
  }
}
.right {
  width: 35%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
}

.contact-trigger {
  position: absolute;
  left:25px;
  bottom: 10px;
  font-size: 16px;
  padding-right: 10px;
  cursor: pointer;
  background-image: url("@/assets/images/bg-button1.png");
  background-color: transparent;
  background-size: 100% 100%;
  width: 160px;
  height: 30px;
  left: calc(50% - 80px);
  bottom: -15px;
  border: none;
  &:hover{
      scale: 1.01 1.05;
  }
  &:active{
      scale: 1;
  }
}

.contact-content{
  position: absolute;
  padding:20px;
  border: #d8f0ff 1px solid;
  width: 400px;
  font-size:16px;
  line-height: 2rem;
  background-color: #162637;
  left: calc(50% - 200px);
  bottom: 40px;
  span{
    position: absolute;
    top:0px;
    right:10px;
    cursor: pointer;
  }
}

.sub-intro {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;

  .sub-title {
    font-size: 18px;
    height: 40px;
    width: 300px;
    font-family: YouSheBiaoTiYuan;
    background-image: url("@/assets/images/bg-title1.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    align-items: center;
  }

  .sub-content {
    width: 100%;
    height: fit-content;
    padding: 20px;
    min-height: 80px;
    font-size: 16px;
    line-height: 2rem;
    background: linear-gradient(to bottom, #32465e, #224388);
    border: 1px solid rgba(0, 170, 255, 1);
    border-image: linear-gradient(
        0deg,
        rgba(0, 213, 255, 1) 0%,
        rgba(0, 132, 255, 1) 100%
      )
      30;
  }
  .info-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .info-key {
      font-weight: 600;
      color: #d8f0ff;
    }
    .info-value {
      color: #eac328;
    }
  }
}
</style>
