<template>
  <div class="chat-app">
    <div class="chat-container">
      <!-- 头部 -->
      <div class="chat-header">
        <div class="title">AI政策助手</div>
        <div class="subtitle">基于Deepseek大模型的政策问答服务</div>
      </div>

      <!-- 对话区域 -->
      <div class="chat-messages" ref="chatContainer">
        <!-- 用户和AI消息 -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message"
          :class="message.role === 'user' ? 'user-message' : 'ai-message'"
        >
          <div v-if="message.role === 'assistant'" class="avatar">
           <svg-icon icon-class="ai-robot" size="2rem"></svg-icon>
          </div>

          <div
            class="message-content"
            :class="
              message.role === 'user'
                ? 'user-message-content'
                : 'ai-message-content'
            "
          >
            <p v-html="message.content"></p>
          </div>

          <div v-if="message.role === 'user'" class="avatar">
            <svg-icon icon-class="ai-user" size="2rem"></svg-icon>
          </div>
        </div>

        <!-- 加载状态 -->
        <div v-if="isLoading" class="loading-message">
          <div class="avatar">
            <i class="fa fa-robot"></i>
          </div>
          <div class="message-content">
            <div class="typing-indicator">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="chat-input">
        <div class="input-container">
          <textarea
            v-model="userInput"
            placeholder="请输入你的问题..."
            :rows="inputRows"
            @input="adjustTextareaHeight"
            @keydown="handleKeydown"
          ></textarea>
          <button
            @click="sendMessage"
            :disabled="isLoading || !userInput.trim()"
          >
            <i class="fa fa-paper-plane"></i>
            <span>发送</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import OpenAI from "openai";

// 初始化Deepseek API客户端
const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-264160b2b27540fba84f3135ac69961b",
  dangerouslyAllowBrowser: true,
});

// 状态管理
const chatContainer = ref(null);
const messages = reactive([
  {
    role: "assistant",
    content:
      "我是AI政策助手，我可以帮你查询和解释相关政策信息。请问有什么可以帮助你的？",
  },
]);
const userInput = ref("");
const isLoading = ref(false);
const inputRows = ref(1);

// 发送消息到Deepseek API
const sendMessage = async () => {
  // 检查输入是否为空
  if (!userInput.value.trim() || isLoading.value) return;

  // 添加用户消息到对话
  const userMessage = {
    role: "user",
    content: userInput.value,
  };
  messages.push(userMessage);

  // 清空输入框
  userInput.value = "";
  inputRows.value = 1;

  // 滚动到底部
  scrollToBottom();

  // 设置加载状态
  isLoading.value = true;

  try {
    // 准备发送给API的消息
    const apiMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // 调用Deepseek API
    const completion = await openai.chat.completions.create({
      messages: apiMessages,
      model: "deepseek-chat",
    });

    // 添加AI回复到对话
    const aiMessage = {
      role: "assistant",
      content: completion.choices[0].message.content,
    };
    messages.push(aiMessage);
  } catch (error) {
    console.error("Deepseek API请求失败:", error);

    // 添加错误消息
    messages.push({
      role: "assistant",
      content:
        '<span class="text-red-500">抱歉，请求处理失败。请稍后再试。</span>',
    });
  } finally {
    // 取消加载状态
    isLoading.value = false;

    // 滚动到底部
    scrollToBottom();
  }
};

// 自动调整文本框高度
const adjustTextareaHeight = () => {
  const textarea = event.target;
  textarea.style.height = "auto";
  textarea.style.height =
    (textarea.scrollHeight > 150 ? 150 : textarea.scrollHeight) + "px";
  inputRows.value = Math.min(
    Math.max(1, Math.floor(textarea.scrollHeight / 24)),
    6
  );
};

// 滚动到聊天容器底部
const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

// 处理键盘事件（Enter发送消息，Shift+Enter换行）
const handleKeydown = (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
};

// 组件挂载后初始化
onMounted(() => {
  // 初始滚动到底部
  scrollToBottom();
});
</script>

<style lang="scss" scoped>
@use "sass:math";

// 变量定义
$primary-color: #3b82f6;
$secondary-color: #6366f1;
$neutral-color: #f3f4f6;
$text-color: #1f2937;
$user-message-color: #3b82f6;
$ai-message-color: #f3f4f6;
$border-color: #e5e7eb;
$shadow-color: rgba(0, 0, 0, 0.1);
$error-color: #ef4444;

.chat-app {
  font-family: "Inter", system-ui, sans-serif;
  background-color: #f9fafb;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: auto;

  .chat-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  .chat-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100px;
    background: linear-gradient(to right, $primary-color, $secondary-color);
    color: white;
    padding: 5px 30px;

    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .subtitle {
      color: #dbeafe;
      font-size: 16px;
    }
  }

  .chat-messages {
    height: 600px;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    // 自定义滚动条
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f9fafb;
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }
  }

  .message {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.3s ease forwards;

    &:nth-child(odd) {
      animation-delay: 0.1s;
    }

    &:nth-child(even) {
      animation-delay: 0.2s;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    //   background-color: #6b7280;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .message-content {
      padding: 0.75rem;
      border-radius: 0.75rem;
      max-width: 90%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      p {
        margin: 0;
        line-height: 1.4;
      }

      &.user-message-content {
        background: linear-gradient(
          to bottom right,
          $user-message-color,
          darken($user-message-color, 10%)
        );
        color: white;
        border-radius: 0.75rem 0.75rem 0 0.75rem;

        &:hover {
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);
        }
      }

      &.ai-message-content {
        background-color: $ai-message-color;
        color: $text-color;
        border-radius: 0.75rem 0.75rem 0.75rem 0;

        &:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      }
    }

    &.user-message {
      justify-content: flex-end;
    }
  }

  .loading-message {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    .typing-indicator {
      display: flex;
      gap: 0.25rem;

      div {
        width: 0.375rem;
        height: 0.375rem;
        background-color: #9ca3af;
        border-radius: 50%;
        animation: typing 1.4s infinite ease-in-out;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  .chat-input {
    border-top: 1px solid $border-color;
    padding: 1rem;

    .input-container {
      display: flex;
      gap: 0.75rem;

      textarea {
        flex: 1;
        border: 1px solid $border-color;
        border-radius: 0.5rem;
        padding: 0.75rem;
        resize: none;
        font-family: inherit;
        font-size: 1rem;
        min-height: 2.5rem;
        max-height: 9.375rem;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: $primary-color;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
        }

        // 自定义滚动条
        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: #f9fafb;
          border-radius: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 0.5rem;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      }

      button {
        background-color: $primary-color;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.75rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

        &:hover {
          background-color: darken($primary-color, 5%);
          box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4),
            0 2px 4px -1px rgba(59, 130, 246, 0.1);
        }

        &:active {
          transform: translateY(1px);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
}

// 动画效果
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

</style>
