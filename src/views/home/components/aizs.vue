<template>
  <div class="aizs-wrap">
    <div class="ai-title flex-center">
      <div class="ai-logo"></div>
      <span>AI智能 一键触达</span>
    </div>
    <div class = "dialog" :style="{flex: props.isUnfolded ? '1' : '0'}">
      <div class="dialog-content" v-for ="(item,index) in conversation" :key="index" :class="item.role">
        <img v-if="item.role === 'assistant'" src="@/assets/images/logo-ai.png" class="conv-logo"/>
        <div class="dialog-text">{{ item.content }}</div>
        <img v-if="item.role === 'user'" src="@/assets/images/logo-user.png" class="conv-logo"/>
      </div>
    </div>
    <div class = "fixed-parts">
      <div class="ai-input flex-center">
        <el-input
          v-model="textarea"
          style="width: 100%"
          :rows="3"
          type="textarea"
          clearable
          placeholder="请输入您的问题，小智为您解答"
        />
        <div class="send-btn flex-center" @click="aiFunction()">
          <img src="../imgs/send-btn.png" alt="发送" />
          发送
        </div>
      </div>
      <div class="ai-function">
        <div class="ai-function-item" @click="aiFunction()">
          <img class="funciton-logo" src="../imgs/ai-zaiti.png" alt="找载体" />
          <div class="fuction-text">找载体</div>
        </div>
        <div class="ai-function-item" @click="aiFunction()">
          <img class="funciton-logo" src="../imgs/ai-suanfa.png" alt="找算法" />
          <div class="fuction-text">找算法</div>
        </div>
        <div class="ai-function-item" @click="aiFunction()">
          <img class="funciton-logo" src="../imgs/ai-xuqiu.png" alt="找需求" />
          <div class="fuction-text">找需求</div>
        </div>
        <div class="ai-function-item" @click="aiFunction()">
          <img class="funciton-logo" src="../imgs/ai-yingyong.png" alt="找应用" />
          <div class="fuction-text">找应用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { el } from "element-plus/lib/locale/index.js";
import { ref } from "vue";
const textarea = ref("");
const isLoading = ref(false);
const emit = defineEmits(['update:isUnfolded']);
const props = defineProps({
  isUnfolded:{
    type: Boolean,
    default: false
  },
});

const conversation = ref([
  {
    role: "assistant",
    content: "你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。",
  },
  {
    role: "user",
    content: "请问我可以在哪里找到合适的载体？",
  },
  {
    role: "assistant",
    content: "你可以通过我们的平台查询最新的载体信息，或者直接联系相关部门获取帮助。",
  },
]);
const aiFunction = () => {
  emit('update:isUnfolded', true);
  if (isLoading.value) {
    ElMessage({
      message: "正在处理，请稍后...",
      type: "warning",
    });
  }else if(textarea.value.trim()){
    conversation.value.push({
      role: "user",
      content: textarea.value,
    });
    textarea.value = "";
    isLoading.value = true;
    setTimeout(() => {
      conversation.value.push({
        role: "assistant",
        content: "请稍等，我正在处理您的请求...",
      });
      isLoading.value = false;
    }, 1000);
  }else{
    ElMessage({
      message: "内容不能为空",
      type: "error",
    });
  }
};
</script>

<style lang="scss" scoped>
.aizs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ai-title {
  width: 100%;
  height: 60px;
  flex-direction: row;
  gap:20px;
  .ai-logo {
    width: 45px;
    height: 45px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("../imgs/ai-logo.png");
    background-position: center center;
  }

  span {
    font-family: YouSheBiaoTiHei;
    text-shadow: 0px 0px 4px rgba(0, 145, 255, 1),
      0px 0px 30px rgba(0, 145, 255, 1);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 2.5px;
  }
}
.fixed-parts{
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 10px;
  
}
.ai-input {
  width: 90%;
  height: 70px;
  margin: 5px 0;
  position: relative;
  margin: 20px 0;
  .send-btn {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 88px;
    height: 30px;
    border-radius: 4px;
    background: rgba(47, 115, 246, 1);
    justify-content: space-around;
    cursor: pointer;
  }
}

:deep(.el-textarea__inner) {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 2px 1px rgba(1, 126, 255, 0.82);
  color: #fff !important;
}

.ai-function {
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  justify-self: end;
  gap: 1.5%;
  .ai-function-item {
    width: 23.5%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: url("../imgs/ai-function.png") center center / 100% 100%
      no-repeat;
    cursor: pointer;

    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
  .funciton-logo {
    width: 48px;
    height: 48px;
  }

  .fuction-text {
    text-shadow: 0px 0px 12px rgba(30, 198, 255, 0.8);
    font-size: 22px;
    font-weight: 500;
  }
}


.dialog{
  width: 90%;
  min-height: 0;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: all 0.1s ease;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
  gap:20px;
}

.dialog-content {
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 20px;
  img{
    width: 50px;
    height: 50px;
  }
  .dialog-text{
    width: fit-content;
    background-color: #0000002f;
    border-radius: 20px;
    padding: 20px;
  }
}

.assistant{
  align-self: flex-start;
}


.user{
  justify-content: right;

  align-self: flex-end;
}

</style>
