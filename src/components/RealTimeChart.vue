<script setup lang="ts">
import { computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { colors } from '../theme';

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
]);

interface Props {
  title: string;
  data: any[];
  type: 'line' | 'bar' | 'area';
  metrics: { key: string; name: string; color: string }[];
}

const props = defineProps<Props>();

const option = computed(() => ({
  backgroundColor: 'transparent',
  title: {
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: colors.surface,
    borderColor: colors.line,
    textStyle: { color: colors.foreground },
  },
  legend: {
    textStyle: { color: colors.muted },
    top: 0,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: props.type === 'bar',
    data: props.data.map(d => d.time),
    axisLine: { lineStyle: { color: colors.line } },
    axisLabel: { color: colors.muted },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: colors.line } },
    axisLabel: { color: colors.muted },
  },
  series: props.metrics.map(m => ({
    name: m.name,
    type: props.type === 'area' ? 'line' : props.type,
    data: props.data.map(d => d[m.key]),
    smooth: true,
    showSymbol: false,
    itemStyle: { color: m.color },
    areaStyle: props.type === 'area' ? {
      opacity: 0.3,
      color: m.color
    } : undefined,
  })),
  animation: false,
}));
</script>

<template>
  <div class="dashboard-card col-span-1 flex min-h-[350px] flex-col sm:col-span-2 lg:col-span-2">
    <div class="mb-4 flex items-center justify-between">
      <span class="card-label">{{ title }}</span>
    </div>
    <div class="min-h-0 flex-1">
      <VChart class="h-[280px] w-full" :option="option" autoresize />
    </div>
  </div>
</template>
