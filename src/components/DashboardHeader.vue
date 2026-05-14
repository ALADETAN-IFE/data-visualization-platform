<script setup lang="ts">
import { Play, Pause } from 'lucide-vue-next';

defineProps<{ isPaused: boolean }>();
defineEmits(['togglePause']);
</script>

<template>
  <header class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center gap-4">
      <div class="h-12 w-12 shrink-0 overflow-hidden rounded-xl">
        <img
          src="/control.png"
          alt="ChidoriStream"
          class="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 class="m-0 text-2xl font-extrabold tracking-tight text-foreground">ChidoriStream</h1>
        <p class="m-0 text-[13px] text-muted">Real-time Analytics Engine</p>
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-4 sm:gap-5">
      <button
        type="button"
        class="flex min-h-10 cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 hover:-translate-y-px"
        :class="isPaused
          ? 'border border-line bg-surface text-foreground'
          : 'bg-accent text-dashboard'"
        @click="$emit('togglePause')"
      >
        <component :is="isPaused ? Play : Pause" :size="18" />
        <span class="hidden sm:inline">{{ isPaused ? 'Resume Stream' : 'Pause Stream' }}</span>
        <span class="sm:hidden">{{ isPaused ? 'Resume' : 'Pause' }}</span>
      </button>
      <div class="flex items-center gap-2 text-xs font-semibold uppercase text-muted">
        <div
          class="h-2 w-2 rounded-full"
          :class="isPaused ? 'bg-muted' : 'animate-pulse-live bg-success'"
        />
        <span>{{ isPaused ? 'Paused' : 'Live' }}</span>
      </div>
    </div>
  </header>
</template>
