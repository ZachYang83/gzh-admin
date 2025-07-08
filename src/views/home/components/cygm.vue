<template>
  <div class="cygm-wrap">
    <div class="bar-chart">
      <GradientBarChart
        :chart-data="chart.chartData"
        :axis="chart.axis"
        :series="chart.series"
        :tooltip="chart.tooltip"
        :legend="chart.legend"
        :grid="chart.grid"
        :label-font-size="chart.labelFontSize"
        :value-label-visible="chart.valueLabelVisible"
        :chart-direction="chart.chartDirection"
        :color-list="chart.colorList"
        :barBorderRadius="chart.barBorderRadius"
        :autoplay="chart.autoplay"
        :bar-axisName="chart.barAxisName"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import hooks from "@/hooks";

const { useChartOption, useScreenModuleData } = hooks;
const { formatTooltip } = useChartOption();
const chart = reactive({
  chartData: [
    {
      name: "北京",
      chanzhi: 3600,
    },
    {
      name: "上海",
      chanzhi: 4500,
    },
    {
      name: "广州",
      chanzhi: 1265,
    },
    {
      name: "深圳",
      chanzhi: 3600,
    },
  ],
  axis: {
    property: "name",
  },
  series: {
    name: "产业规模",
    property: "chanzhi",
  },
  tooltip: {
    trigger: "axis",
    formatter: (p) => formatTooltip(p, { unit: ["亿元"], scale: 1 }),
  },
  grid: {
    top: "20%",
    bottom: "1%",
    left: "1%",
    right: "1%",
  },
  legend: {},
  colorList: ["#4f9aff", "rgba(11,42,84,.3)"],
  labelFontSize: 14,
  autoplay: true,
  valueLabelVisible: true,
  chartDirection: "horizontal",
  barBorderRadius: [5, 5, 0, 0],
  barAxisName: "单位：亿元",
});
</script>

<style lang="scss" scoped>
.cygm-wrap {
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;

  .bar-chart {
    width: 100%;
    height: 100%;
    // background: url("../imgs/cygm-barChart.png") center center / 100% 100%
    //   no-repeat;
  }
}
</style>
