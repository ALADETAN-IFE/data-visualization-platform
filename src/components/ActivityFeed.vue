<script setup lang="ts">
import { format } from 'date-fns';
import { Info, AlertTriangle, XCircle, CheckCircle } from 'lucide-vue-next';

interface LogEntry {
  id: string;
  timestamp: Date;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

defineProps<{ logs: LogEntry[] }>();

const icons = {
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
  success: CheckCircle,
};

const iconClasses = {
  info: 'text-accent',
  warning: 'text-warning',
  error: 'text-danger',
  success: 'text-success',
} as const;
</script>

<template>
  <div class="dashboard-card col-span-1 flex max-h-[400px] flex-col overflow-hidden sm:col-span-2 lg:col-span-2">
    <div class="mb-4 flex shrink-0 items-center justify-between">
      <span class="card-label">Live Activity Feed</span>
      <span class="rounded bg-accent-muted px-2 py-0.5 text-[10px] font-bold uppercase text-accent">Live</span>
    </div>
    <div class="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
      <div
        v-for="log in logs"
        :key="log.id"
        class="flex gap-3 border-b border-line/40 pb-3 last:border-b-0 last:pb-0"
      >
        <component
          :is="icons[log.type]"
          :size="16"
          class="mt-0.5 shrink-0"
          :class="iconClasses[log.type]"
        />
        <div class="min-w-0 flex-1">
          <p class="m-0 text-[13px] text-foreground">{{ log.message }}</p>
          <span class="text-[11px] text-muted">{{ format(log.timestamp, 'HH:mm:ss') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
