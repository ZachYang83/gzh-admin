// 定义一个函数来转义字符串中的特殊字符
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 定义一个独立的函数来处理文本高亮逻辑
function highlightText(el, binding) {
  // 获取绑定值，即要高亮显示的文本
  const searchTerm = binding.value.toString();

  // 转义 searchTerm 中的特殊字符
  const escapedSearchTerm = escapeRegExp(searchTerm);

  // 创建一个正则表达式，用于全局不区分大小写的匹配
  const regex = new RegExp(escapedSearchTerm, "gi");

  // 获取元素的文本内容
  const textContent = el.textContent || "";

  // 使用 replace 方法替换匹配到的文本，并添加高亮样式
  const highlightedText = textContent.replace(regex, (matchedText) => {
      // 为匹配的文本添加黄色背景、橙色加粗样式
      return `<span style="background-color: #f3f336; color:#2b4fed; font-weight: bold;">${matchedText}</span>`;
  });

  // 设置元素的 innerHTML 为高亮后的文本
  el.innerHTML = highlightedText;
}

export default {
  // 挂载阶段调用高亮处理函数
  mounted(el, binding) {
      highlightText(el, binding);
  },
  // 更新阶段调用高亮处理函数
  updated(el, binding) {
      highlightText(el, binding);
  },
};