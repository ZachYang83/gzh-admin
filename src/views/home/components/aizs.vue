<template>
  <div class="aizs-wrap">
    <div class="ai-title flex-center">
      <div class="ai-logo"></div>
      <span>AI智能 一键触达</span>
    </div>
    <div id = "dialog" :style="{flex: props.isUnfolded ? '1' : '0'}">
      <div class="dialog-content" v-for ="(item,index) in conversation" :key="index" :class="item.role">
        <img v-if="item.role === 'assistant'" src="@/assets/images/logo-ai.png" class="conv-logo"/>
        <div class="dialog-text"><markdown :source="item.content" /></div>
        <img v-if="item.role === 'user'" src="@/assets/images/logo-user.png" class="conv-logo"/>
      </div>
    </div>
    <div class = "fixed-parts">
      <div class = "ai-prompts">
        <div class = "shuffle-btn" @click="changePrompt">
          换一换 <svg-icon icon-class="icon-shuffle" class="svg-icon" size="1.2rem" />
        </div>
        <div class = "prompt-texts">
          <div class="prompt-text" v-for="(prompt, index) in currentPrompt" :key="index" @click="fillInPrompt(prompt)">
            {{ prompt }}
          </div>
        </div>
      </div>
      <div class="ai-input flex-center">
        <el-input
          v-model="textarea"
          style="width: 100%"
          :autosize="{ minRows: 3, maxRows: 6 }"
          type="textarea"
          clearable
          placeholder="请输入您的问题，小智为您解答"
          @keyup = "emit('update:isUnfolded', true)"
        />
        <div class="send-btn flex-center" @click="aiFunction()">
          <img src="../imgs/send-btn.png" alt="发送" />
          发送
        </div>
      </div>


      <!-- <div class="ai-function">
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
      </div> -->
      

    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { el } from "element-plus/lib/locale/index.js";
import Markdown from 'vue3-markdown-it';
import { computed, ref } from "vue";
const textarea = ref("");
const isLoading = ref(false);
const emit = defineEmits(['update:isUnfolded']);
const props = defineProps({
  isUnfolded:{
    type: Boolean,
    default: false
  },
});
const prompts = ref([
  "我是广州市政府工作人员，请推荐一些提高办公效率的人工智能软件",
  "作为交通领域从业人员，我想知道有哪些人工智能应用可以帮助我们优化交通管理",
  "我是一名教育工作者，想了解人工智能在教育领域的应用",
  "我的公司擅长使用人工智能处理数据，广州市目前是否有相关的需求或项目可以合作？",
  "最近有哪些新的大模型备案？",
  "是否已有人工智能在遥感方面的应用？",
  "我需要一个可以处理大数据的算法，广州市有哪些推荐？",
]);

const promptIndex = ref(0);
const changePrompt = () => {
  promptIndex.value = Math.floor(Math.random() * prompts.value.length);
};
const currentPrompt = computed(() => {
  return [
    prompts.value[promptIndex.value],
    prompts.value[(promptIndex.value + 1) % prompts.value.length],
  ];
});

// {
//     role: "assistant",
//     content: "你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。你是一个AI助手，擅长回答关于载体、算法、需求和应用的问题。",
//   },
// {
//     role: "user",
//     content: "请问我可以在哪里找到合适的载体？",
//   },
const conversation = ref([]);

const fillInPrompt = (prompt) =>{
  textarea.value = prompt;
}

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
    let question = textarea.value;
    textarea.value = "";
    isLoading.value = true;
    conversation.value.push({
      role: 'assistant',
      content: ''
    });
    pretendThinking();
    getAIREply(question);
  }else{
    ElMessage({
      message: "内容不能为空",
      type: "error",
    });
  }
};

function updateLastAssistantMessage(text) {
  conversation.value[conversation.value.length - 1].content = text;
}
//应用型的回答不是流式输出，所以要假装思考
const thinkingMessages = [
  "正在理解问题",
  "正在从数据库和网络获取信息",
  "正在分析数据",
  "正在生成回答",
];
const pretendThinking = () => {
  let thinkingIndex = 0;
  let dots = '';
  let lastMessage = '';
  updateLastAssistantMessage("");
  const textInterval = setInterval(() => {
      if (thinkingIndex < thinkingMessages.length - 1) {
        thinkingIndex = (thinkingIndex + 1);
      } else {
        clearInterval(textInterval);
      }
    }, 3000);

  const dotsInterval = setInterval(() => {
    if (dots.length < 3) {
      dots += '.';
    } else {
      dots = '';
    }
    if (isLoading.value && lastMessage == conversation.value[conversation.value.length - 1].content) {
      lastMessage = thinkingMessages[thinkingIndex]+dots;
      updateLastAssistantMessage(lastMessage);
    }else{
      clearInterval(dotsInterval);
      clearInterval(textInterval);
    }
  }, 500);

  
};

//流式获取AI输出
const getAIREply = async (question) => {
    const apiKey = "sk-1d7b4dbe784940b1ad1211bf180f832e";
    // const appId = '1ebc45b10da1486ab36fe607caa1a2fe';
    const appId = 'b92122688bdb468b835fbc2a088f1e47';
    const url = `https://dashscope.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: question
        },
        parameters: {'incremental_output' : 'true'},
        debug: {}
    };

    try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-DashScope-SSE': 'enable'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error(`Request failed: ${response.status}`);
      console.error(errData);
      return;
    }


    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      // console.log(`Received chunk:`, chunk);
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const jsonStr = line.slice(5).trim();
          if (jsonStr !== '[DONE]') {
            try {
              const parsed = JSON.parse(jsonStr);
              const text = parsed.output.text || '';
              result += text;

              // 更新临时消息对象的内容
              //updateLastAssistantMessage(result);

              // 如果 finish_reason 是 stop，则不再等待更多数据
              if (parsed.output.finish_reason === 'stop') {
                //console.log('Final result:', result);
                updateLastAssistantMessage(text);
                break;
              }else if(parsed.output.finish_reason != 'null'){
                isLoading.value = false;
                updateLastAssistantMessage("服务器开小差了~请稍后再试");
                break;
              }
            } catch (e) {
              console.error('JSON parse error:', e);
            }
          }
        }else if (line.startsWith('Final result:')) {
          break
        }
      }
    }
    isLoading.value = false;
    

  } catch (error) {
    console.error(`Error calling DashScope: ${error.message}`);
    isLoading.value = false;
  }
};

//滚动到底

watch(() => conversation.value, () => {
  
  let dialog = document.getElementById('dialog');
  dialog.scrollTop = dialog.scrollHeight;
  //console.log(dialog.scrollHeight);
},{ deep: true });
</script>

<style lang="scss" scoped>
.aizs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.ai-title {
  width: 100%;
  height: max-content;
  flex-direction: row;
  gap:20px;
  padding: 20px;
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
  height: fit-content;
  margin: 5px 0;
  position: relative;
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
  //background-color: rgba(255, 255, 255, 0.15);
  background-color: #404B64;
  box-shadow: 0 0 2px 1px rgba(1, 126, 255, 0.82);
  color: #fff !important;
}

.ai-prompts{
  width: fit-content;
  height: 50px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap:25px;
  .shuffle-btn{
    width: fit-content;
    gap:5px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
    svg-icon {
      color: #fff;
    }
  }
  .prompt-texts {
    height: 100%;
    width: 550px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 14px;
    color: #fff;
    text-shadow: 0px 0px 4px rgba(0, 145, 255, 1);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .prompt-text{
    cursor: pointer;
  }
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


#dialog{
  width: 90%;
  min-height: 0;
  margin-bottom: 160px;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: all 0.1s ease;
  
  display: flex;
  flex-direction: column;
  gap:20px;
}

.dialog-content {
  width: 85%;
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
