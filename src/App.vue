<script setup lang="ts">
import { ref } from 'vue';
import { useDataStream } from './composables/useDataStream';
import DashboardHeader from './components/DashboardHeader.vue';
import MetricCard from './components/MetricCard.vue';
import RealTimeChart from './components/RealTimeChart.vue';
import ActivityFeed from './components/ActivityFeed.vue';
import { colors } from './theme';

const { metrics, chartData, logs, isPaused, togglePause } = useDataStream();

const cpuMetrics = [{ key: 'cpu', name: 'CPU Load', color: colors.accent }];
const networkMetrics = [
  { key: 'network', name: 'Traffic In', color: colors.accent },
  { key: 'memory', name: 'Memory', color: colors.purple },
];

const nodeStatus = ref(
  Array.from({ length: 8 }, () => Math.random() > 0.1)
);
</script>

<template>
  <div class="mx-auto min-h-screen w-full max-w-[1400px] px-4 py-6 sm:px-6">
    <DashboardHeader :is-paused="isPaused" @toggle-pause="togglePause" />

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        v-for="metric in metrics"
        :key="metric.label"
        v-bind="metric"
      />

      <RealTimeChart
        title="System Performance (Real-time)"
        :data="chartData"
        :metrics="cpuMetrics"
        type="area"
      />

      <RealTimeChart
        title="Network & Memory Distribution"
        :data="chartData"
        :metrics="networkMetrics"
        type="bar"
      />

      <ActivityFeed :logs="logs" />

      <div class="dashboard-card col-span-1 sm:col-span-2 lg:col-span-4">
        <div class="mb-4 flex items-center justify-between">
          <span class="card-label">Infrastructure Health Overview</span>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="(ok, i) in nodeStatus"
            :key="i"
            class="flex items-center gap-2.5 rounded-lg bg-accent-muted p-2.5 text-[13px] text-foreground"
          >
            <div
              class="h-2.5 w-2.5 shrink-0 rounded-full"
              :class="ok ? 'bg-success' : 'bg-danger'"
            />
            <span>Node {{ 100 + i + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
