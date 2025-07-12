<template>
  <div class="supDem-wrap">
    <div class="top-bar">助力企业智能化转型和创新发展</div>
    <div class="scene-swiper flex-center">
      <div class="swiper-topic">优秀案例展示</div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="swiper-wrap"
      >
        <swiper-slide v-for="(item, index) in productScene" :key="item.id">
          <div class="swiper-scene">
            <div class="scene-img flex-center">
              <img src="./imgs/swiper-default.png" :alt="item.productName" />
            </div>
            <div class="scene-content">
              <div class="scene-content-title">{{ item.productName }}</div>
              <div class="scene-content-desc">{{ item.discription }}</div>
              <div class="scene-content-label">{{ item.sceneClass }}</div>
              <div class="scene-content-btn flex-center">查看联系</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="main-container">
      <div class="main-container-dem">
        <flexBox title="最新需求">
          <template #content>
            <div class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in demandScene"
                :key="item.id"
              >
                <div class="item-title">
                  {{ item.requirementName }}
                </div>
                <div class="item-content">
                  {{ item.discription }}
                </div>
                <div class="item-label">
                  {{ item.sceneClass }}
                </div>
              </div>
            </div>
          </template>
        </flexBox>
      </div>
      <div class="main-container-sup">
        <flexBox title="最新供给">
          <template #content>
            <div class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in supplyScene"
                :key="item.id"
              >
                <div class="item-title">
                  {{ item.productName }}
                </div>
                <div class="item-content">
                  {{ item.discription }}
                </div>
                <div class="item-label">
                  {{ item.sceneClass }}
                </div>
              </div>
            </div>
          </template>
        </flexBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
import supplyApi from "@/api/supDemMatch/supply.js";
import demandApi from "@/api/supDemMatch/demand.js";
import productApi from "@/api/product/index.js";
const supplyScene = ref([]);
const demandScene = ref([]);
const productScene = ref([]);
onMounted(() => {
  supplyApi.getAll().then((res) => {
    let resData = res.data.slice(0, 6);
    supplyScene.value = resData;
  });
  demandApi.getAll().then((res) => {
    let resData = res.data.slice(0, 6);
    demandScene.value = resData;
  });
  productApi.getAll().then((res) => {
    let resData = res.data.slice(0, 6);
    productScene.value = resData;
  });
});
</script>

<style lang="scss" scoped>
.supDem-wrap {
  width: 100%;
  height: 100%;
  padding: 5px 140px;
  overflow-y: auto;
}

.top-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-left: 200px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 2.5px;
  line-height: 49.39px;
  color: rgba(216, 240, 255, 1);
}

.scene-swiper {
  width: 100%;
  height: 400px;
  flex-direction: column;
  padding: 5px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgba(48, 97, 219, 0.19) 0%,
    rgba(48, 97, 219, 0.08) 99.88%
  );
  margin-bottom: 10px;

  .swiper-topic {
    font-size: 24px;
    font-weight: 500;
    color: #d8f0ff;
    margin: 5px 0;
  }

  .swiper-wrap {
    flex: 1;
    width: 80%;
    box-sizing: border-box;
  }
}

.swiper-scene {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .scene-img {
    flex: 2;
    height: 100%;
  }

  .scene-content {
    flex: 3;
    height: 60%;

    .scene-content-title {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0px;
      color: rgba(255, 255, 255, 1);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .scene-content-label {
      height: 30px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(67, 148, 247, 1);
    }

    .scene-content-desc {
      width: 100%;
      margin: 30px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20.27px;
      color: rgba(154, 168, 184, 1);
    }

    .scene-content-btn {
      width: 100px;
      height: 30px;
      background: linear-gradient(
        270deg,
        rgba(8, 45, 123, 0.43) 0%,
        rgba(7, 51, 134, 1) 100%
      );
    }
  }
}

.main-container {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  gap: 20px;
  .main-container-dem {
    flex: 1;
  }

  .main-container-sup {
    flex: 1;
  }
}

.item-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;

  .item {
    width: 49%;
    height: 180px;
    border: #b0c2d68a 1px solid;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;

    &:hover{
      border: #0071F2 1px solid;
    }

    .item-title {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0px;
      color: rgba(255, 255, 255, 1);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item-label {
      height: 30px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(67, 148, 247, 1);
    }

    .item-content {
      width: 100%;
      margin: 10px 0 20px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20.27px;
      color: rgba(154, 168, 184, 1);
    }
  }
}
</style>
