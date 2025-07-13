import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'swiper/css' // 引入基本样式
import 'swiper/css/pagination' // 引入分页器样式
import 'swiper/css/navigation' // 引入导航按钮样式
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';


// 路由权限
import "./permission.js";

// 基于断点的隐藏类样式
import "element-plus/theme-chalk/display.css";
// element-plus的message相关样式
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/message-box.scss";
// 字体样式
import "./assets/iconfont/iconfont.css";
// 全局样式
import "./styles/index.scss";
// 整个svg图标
import "virtual:svg-icons-register";

const app = createApp(App);
app.config.productionTip = false;
// 全局注册Swiper组件
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

// 全局配置Swiper模块
app.config.globalProperties.$swiper = {
  modules: [Autoplay, Pagination, Navigation]
}

app.use(store).use(router).mount("#app");
