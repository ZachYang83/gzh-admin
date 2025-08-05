<template>
  <div class="supDem-wrap">
    <div class="top-bar">
      <tybtl title = "助力企业智能化转型和创新发展" :isHome = "true"/>
    </div>
    <div class="scene-swiper flex-center">
      <div class="swiper-topic">优秀案例展示</div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="productScene.length >= 4"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="$swiper.modules"
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
              <!-- <div class="scene-content-btn flex-center">查看联系</div> -->
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="main-container">
      <div class="main-container-dem">
        <flexBox title="最新需求" @click="goToTable('demTable')">
          <template #more
            ><div class="more-info flex-center">更多 >></div></template
          >
          <template #content>
            <div class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in demandScene"
                :key="item.id"
                @click.stop="goToDemDetail(item.id)"
              >
                <div class="item-title">
                  {{ item.requirementName }}
                </div>
                <div class="item-content">
                   简介：{{ item.discription }}
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
        <flexBox title="最新供给" @click="goToTable('supTable')">
          <template #more
            ><div class="more-info flex-center">更多 >></div></template
          >
          <template #content>
            <div class="item-wrap">
              <div
                class="item"
                v-for="(item, index) in supplyScene"
                :key="item.id"
                @click.stop="goToSupDetail(item.id)"
              >
                <div class="item-title">
                  {{ item.productName }}
                </div>
                <div class="item-content">
                  简介：{{ item.discription }}
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
import supplyApi from "@/api/supDemMatch/supply.js";
import demandApi from "@/api/supDemMatch/demand.js";
import productApi from "@/api/product/index.js";
import router from "../../router";
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

// 跳转方法
const goToTable = (title) => {
  if (title === "supTable") {
    router.push({ name: "supTable" });
  } else {
    router.push({ name: "demTable" });
  }
};

const goToSupDetail = (id) => {
  router.push({
    name: "supDetail",
    query: {
      id: id,
    },
  });
};

const goToDemDetail = (id) => {
  router.push({
    name: "demDetail",
    query: {
      id: id,
    },
  });
};
</script>

<style lang="scss" scoped>
.supDem-wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
}

.scene-swiper {
  width: 80%;
  height: 340px;
  flex-direction: column;
  padding: 5px;
  border-radius: 2px;
  // background: linear-gradient(
  //   90deg,
  //   rgba(48, 97, 219, 0.19) 0%,
  //   rgba(48, 97, 219, 0.08) 99.88%
  // );
  background-image: url(./imgs/bg-showcase-board.png);
  background-size: 100% 100%;
  margin-bottom: 10px;

  .swiper-topic {
    font-size: 24px;
    font-weight: 500;
    color: #d8f0ff;
  }

  .swiper-wrap {
    flex: 1;
    width: 80%;
    box-sizing: border-box;
  }
}

.swiper-scene {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:30px;
  .scene-img {
    flex: 2;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
      margin-top: 10px;
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
  width: 80%;
  height: fit-content;
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
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 10px;
  gap: 10px;

  .item {
    width: 49%;
    height: 180px;
    border: #b0c2d68a 1px solid;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
      border: #0071f2 1px solid;
    }

    .item-title {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0px;
       color: #D8F0FF;
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

.more-info {
  &:hover {
    color: #0071f2;
    cursor: pointer;
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
