<template>
  <div class="xctg-wrap flex-center">
    <div class="swiper-wrap">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="slides.length >= 4"
        :autoplay="{
          delay: 4000,
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
    title: "广州智算运行服务平台(一期)项目",
    content: "整合全市智算资源，实现高效调配与利用，为多元AI业务场景提供强大支持，提供AI应用全生命周期管理，推动数字经济发展",
    img_src: getImage("xctg-aizz.png"),
    imgalt: "AI制造图像",
  },
  {
    id: 2,
    class_name: "AI交通",
    title: "白云湖大道智慧交通系统",
    content:
      "全天候精准感知车道级流量数据，边缘端AI计算秒级智能优化信号配时，提升交叉口单次通过效率，降低交叉口的绿灯空放时间，保证交通通畅和提升交通参与者出行体验。",
    img_src: getImage("xctg-aijt.jpg"),
    imgalt: "AI交通图像",
  },
  {
    id: 3,
    class_name: "AI医疗",
    title: "医学影像AI智能质控系统",
    content:
      "患者满意度预计将从当前的80%提升至90%以上。 随着诊断准确性的提高，医疗纠纷发生率预计将降低50%，减少医患矛盾，提升医院的社会形象。",
    img_src: getImage("xctg-aiyl.png"),
    imgalt: "AI医疗",
  },
  {
    id: 4,
    class_name: "AI教育",
    title: "云蝶全场景AI智慧体育校园项目",
    content:
      " 适用场景范围广 1、适用场景范围广 AI智慧体育校园涵盖了体育教学、课外锻炼、竞赛考试等多个场景。在体育教学中，通过智能化设备对学生的运动数据进行实时采集和分析，教师可以根据每个学生的具体情况制定个性化的教学计划，提高教学的针对性和有效性。 2、智能辅助程度深 该项目利用视觉识别技术，实时捕捉并分析学生的运动过程，如动作轨迹、速度、力度等关键指标，对学生动作进行精准识别和评估。",
    img_src: getImage("xctg-aijy.jpg"),
    imgalt: "AI教育",
  },
  {
    id: 5,
    class_name: "AI文创",
    title: "酷狗AIK多语种AI歌曲制作项目",
    content:
      " 1.酷狗AIK在推广中始终贴合产品功能特性，整合明星音乐人资源，与品牌跨界合作，以传统文化为情感连接。比如在文旅领域，酷狗AIK联合同程旅游推出“唱游中国”音乐活动，用AI歌声游历大江南北，以传统文化的方言为切入点，用热歌《一路生花》推出10种方言的趣味版本，扩大传统文化影响力。在文化出海领域，酷狗AIK与海外知名组合西城男孩合作发布了全球首支AI中文歌《越爱越强》，吸引了全球知名音乐商业网站Musi",
    img_src: getImage("xctg-aiwc.png"),
    imgalt: "AI文创",
  },
  {
    id: 6,
    class_name: "AI城市运营",
    title: "广州市政府采购中心彩翼公共采购智能体协同管理平台",
    content:
      "一是经济效益方面：1、降本增效，优化运营，服务参与广州市政府采购的40000多家投标企业，惠及8000家中小微企业；2、强化品牌，提升竞争力；3、构建行业首个智能体应用生态联盟；4、创造税收，回馈社会。二是社会效益方面：1、建设信用体系，优化营商环境；2、精准数据支撑，助力提升监管效能；3、助力绿色经济，避免重复建设；4、助力廉政建设，护航采购透明公正。",
    img_src: getImage("xctg-csyy.jpg"),
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
  padding-top: 60px;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
    text-overflow: ellipsis;
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
  padding: 40px;
  padding-top: 80px;
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

