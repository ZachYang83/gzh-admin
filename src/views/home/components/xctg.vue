<template>
  <div class="xctg-wrap flex-center">
    <div class="swiper-wrap">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="slides.length >= 4"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="$swiper.modules"
        class="swiper-box"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="swiper-item"
        >
          <div class="xctg-intro">
            <div class="intro-class-name">{{ slide.class_name }}</div>
            <div class="class-name-underline"></div>
            <div class="intro-title">{{ slide.title }}</div>
            <div class="intro-content">{{ slide.content }}</div>
            <!-- <div class="intro-btn">立即联系</div> -->
          </div>
          <div class="xctg-imgbox">
            <img :src="slide.img_src" :alt="slide.imgalt" /></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import "swiper/css/pagination";
const getImage = (imageName) => {
  return new URL(`../imgs/${imageName}`, import.meta.url).href;
};

const slides = ref([
  {
    id: 1,
    class_name: "AI制造",
    title: "汽车生产制造过程中的智能化质量检测应用",
    content: "零部件检测\n焊接质量监测\n涂装监测\n总装监测",
    img_src: getImage("xctg-aizz.png"),
    imgalt: "AI制造图像",
  },
  {
    id: 2,
    class_name: "AI交通",
    title: "自动驾驶无人巴士便民路线场景",
    content:
      "无人小巴整车采用无驾驶舱的全无人驾驶设计，通过搭载文远知行自主研发的全栈式软硬件解决方案，车身设有多组前沿传感器，可以360度无盲区地感知周围路况，高效处理各种复杂的城市交通路况，可支持全天时、全天候、全场景运行",
    img_src: getImage("xctg-aijt.png"),
    imgalt: "AI交通图像",
  },
  {
    id: 3,
    class_name: "AI医疗",
    title: "AI影像辅助诊断",
    content:
      "基于图像识别和深度学习技术，结合医学专家诊断经验和大量样本数据，自动从医学影像中检出病灶并对良恶性做出诊断，辅助医生快速、准确地完成影像诊断，提高医生的诊疗能力，诊疗效率",
    img_src: getImage("xctg-aiyl.png"),
    imgalt: "AI医疗",
  },
  {
    id: 4,
    class_name: "AI教育",
    title: "应用生态+大数据”教育云综合解决方案",
    content:
      " 讯飞体系应用：提供讯飞智慧课堂、智学网、新高考、走班排课等尖刀应用，涵盖教、学、考、评、管等全部教学场景",
    img_src: getImage("xctg-aijy.png"),
    imgalt: "AI教育",
  },
  {
    id: 5,
    class_name: "AI文创",
    title: "虚拟数智人",
    content:
      "虚拟数智人是实施国家文化数字化战略的 AI3D 技术产品。凡拓数创 3D 虚拟数字人是一种基于计算机技术和人工智能技术开发的虚拟人物形象，通过动作捕捉技术和 AI 技术使得可以模拟人类的各种动作、表情和语音，具有高质量的人物形象，精致的视觉表现力等特点",
    img_src: getImage("xctg-aiwc.png"),
    imgalt: "AI文创",
  },
  {
    id: 6,
    class_name: "AI城市运营",
    title: "自动驾驶+新能源”机械化作业无人驾驶智能环卫项目场景",
    content:
      " 自动驾驶新能源环卫车整车实现了全无人一体化设计，具备静态信息识别、贴边清扫、自动补给、自动苏醒、智能作业、智能垃圾识别等功能，可以全自动完成全洗扫、全扫、对冲、后喷雾、翘吸、冬季自动吹水、箱体高压自洁等多种清扫保洁相关任务。",
    img_src: getImage("xctg-csyy.png"),
    imgalt: "AI城市运营",
  },
]);
</script>

<style lang="scss" scoped>
.xctg-wrap {
  width: 100%;
  height: 100%;
}
.swiper-wrap {
  width: 100%;
  height: 100%;
  background-image: url("../imgs/xctg-bg.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0 0 15px rgba(171, 201, 245, 1);
}

.swiper-box {
  width: 920px;
  height: 100%;
  box-sizing: border-box;

  .swiper-item {
    display: flex;
  }
}

.xctg-intro {
  width: 40%;
  padding: 30px;
  color: #fff;
  box-sizing: border-box;

  .intro-class-name {
    font-size: 36px;
    font-weight: bold;
  }
  .class-name-underline {
    width: 100px;
    height: 5px;
    margin-top: 1%;
    background-color: #fff;
  }
  .intro-title {
    font-size: 24px;
    margin-top: 10%;
    font-weight: bold;
  }
  .intro-content {
    font-size: 16px;
    margin-top: 10%;
    line-height: 2;
    font-weight: lighter;
    max-height: 30%;
  }

  .intro-btn {
    width: 100px;
    height: 35px;
    margin-top: 20%;
    font-size: 16px;
    font-weight: lighter;
    background: linear-gradient(
      to right,
      rgba(8, 45, 123, 1),
      rgba(8, 45, 123, 0.4)
    );
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
}
.xctg-imgbox {
  width: 60%;
  padding: 5%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 70%;
    object-fit: fill;
    border: 1px solid #fff;
    box-shadow: 0 0 20px white;
    -webkit-box-reflect: below 6%
      linear-gradient(transparent, transparent, transparent, rgba(0, 0, 0, 0.6));
  }
}
:deep(.swiper-pagination-bullet) {
  width: 20px;
  height: 8px;
  margin: 0 6px;
  background-color: rgba(237, 240, 245, 0.5);
  opacity: 1;
  border-radius: 10px;
  transition: all 0.2s ease;

}

:deep(.swiper-pagination-bullet-active) {
  width: 50px;
  background-color: #1B70F0;
  border-radius: 4px;
}
</style>

