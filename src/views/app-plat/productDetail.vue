<template>
  <div class="detail-wrap">
    <div class="main-title">
      <Tybtl :title="productInfo.product_name" :isHome="false"></Tybtl>
    </div>
    <div class="main-content">
      <div class="main-intro">
        <div class="left">
          <img
            src="./imgs/product-demo.png"
            alt="场景详情背景图"
            class="bg-image"
          />
        </div>
        <div class="right">
          <div class="cjjs">技术亮点</div>
          <div class="cjjs-content">{{ productInfo.discription }}</div>
          <div class="unit">
            <span>场景供应商：</span
            ><span class="unit-support">{{ productInfo.supporting_unit }}</span>
          </div>
          <div class="unit">
            <span>产品类型：</span
            ><span class="unit-kind">{{ productInfo.product_class }}</span>
          </div>
          <div class="unit">
            <span>应用领域：</span
            ><span class="unit-field">{{ productInfo.scene_class }}</span>
          </div>
          <div class="unit">
            <span>所属区：</span
            ><span class="unit-district">{{ productInfo.district }}</span>
          </div>
          
        </div>
        <div class="contact-trigger">联系洽谈</div>
        <div class = "contact-content">{{ productInfo.contact }}</div>
      </div>
      <div class="sub-intro">
        <div class="sub-title">专利布局情况</div>
        <div class="sub-content">
          {{ productInfo.patent_discription }}
        </div>
      </div>
      <div class="sub-intro">
        <div class="sub-title">市场情况</div>
        <div class="sub-content">
          {{ productInfo.marketization_status }}
        </div>
      </div>
      <div class="sub-intro">
        <div class="sub-title">产业化需求</div>
        <div class="sub-content">
          {{ productInfo.requirement }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Api from "@/api/product/index.js";
import { reactive } from "vue";
const route = useRoute();
const productId = ref(10);
const productInfo = reactive({
  product_name: "",
  supporting_unit: "",
  scene_class: "",
  product_class: "",
  discription: "",
  patent_discription: "",
  marketization_status: "",
  requirement: "",
  contact: "",
  district: "",
});

onMounted(() => {
  if (route.query.id) {
    productId.value = Number(route.query.id);
  }
  // 根据id获取场景
  Api.getById({ id: productId.value }).then((res) => {
    let resData = res.data;
    productInfo.product_name = resData.productName;
    productInfo.supporting_unit = resData.supportingUnit;
    productInfo.scene_class = resData.sceneClass;
    productInfo.product_class = resData.productClass;
    productInfo.discription = resData.discription;
    productInfo.patent_discription = resData.patentDiscription;
    productInfo.marketization_status = resData.marketizationStatus;
    productInfo.requirement = resData.requirement;
    productInfo.contact = resData.contact;
    productInfo.district = resData.district;
  });
});
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
  color: #d8f0ff;
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
  width: 43%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.right {
  width: 57%;
  height: 100%;
  padding-top: 30px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 20px;
  .cjjs {
    font-size: 20px;
    font-weight: 600;
  }
  .cjjs-content {
    max-height: 250px;
    font-size: 16px;
    line-height: 1.5rem;
    overflow: scroll;
    /*隐藏滑动条*/
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .unit {
    width: 100%;
    // span {
    //   font-weight: 600;
    // }

    .unit-support {
      font-weight: 600;
      color: #2b87ff;
    }
    .unit-kind {
      display: inline-block;
      background: linear-gradient(40deg, #2b87ff, #2bcaff);
      padding: 3px 6px;
      border-radius: 4px;
    }
    .unit-field {
        display: inline-block;
      background: linear-gradient(40deg, #2b87ff, #2bcaff);
      padding: 2px 5px;
      border-radius: 4px;
    }
    .unit-district {
      color: #2b87ff;
    }
  }
}

.contact-trigger {
  position: absolute;
  right:25px;
  bottom: 10px;
  font-size: 16px;
  padding-right: 10px;
  cursor: context-menu;
  &:hover {
    color: #d8f0ff;
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
  right: 25px;
  bottom: 40px;
  display: none;
}
.contact-trigger:hover + .contact-content {
  display: block;
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
    font-size: 20px;
    height: 40px;
    width: 300px;
    font-family: YouSheBiaoTiHei;
    color: #d8f0ff;
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
    line-height: 1.5rem;
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
      margin-top: 10px;
      color: #eac328;
    }
  }
}
</style>
