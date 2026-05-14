<script setup lang="ts">
import { TrendingUp, TrendingDown, Minus } from 'lucide-vue-next';

interface Props {
  label: string;
  value: number | string;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  change: string;
}

defineProps<Props>();

const trendClasses = {
  up: 'text-success',
  down: 'text-danger',
  neutral: 'text-muted',
} as const;
</script>

<template>
  <div class="dashboard-card">
    <div class="card-label">{{ label }}</div>
    <div class="my-3 flex items-baseline gap-1">
      <span class="text-[28px] font-bold leading-none text-foreground">{{ value }}</span>
      <span class="text-sm text-muted">{{ unit }}</span>
    </div>
    <div class="flex items-center gap-1.5 text-xs" :class="trendClasses[trend]">
      <component :is="trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus" :size="14" />
      <span class="font-semibold">{{ change }}</span>
      <span class="ml-1 text-muted">vs last min</span>
    </div>
  </div>
</template>
