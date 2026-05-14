import { ref, onMounted, onUnmounted } from 'vue';

export interface Metric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  change: string;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export function useDataStream() {
  const metrics = ref<Metric[]>([
    { label: 'CPU Usage', value: 42, unit: '%', trend: 'up', change: '+2.4%' },
    { label: 'Memory', value: 6.8, unit: 'GB', trend: 'down', change: '-0.2GB' },
    { label: 'Network In', value: 124, unit: 'Mbps', trend: 'up', change: '+12Mbps' },
    { label: 'Network Out', value: 89, unit: 'Mbps', trend: 'neutral', change: '0%' },
  ]);

  const chartData = ref<{ time: string; cpu: number; memory: number; network: number }[]>([]);
  const logs = ref<LogEntry[]>([]);
  const isPaused = ref(false);

  let interval: any;

  const generateData = () => {
    if (isPaused.value) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    metrics.value = metrics.value.map(m => {
      const variation = (Math.random() - 0.5) * 5;
      const newValue = Math.max(0, parseFloat((m.value + variation).toFixed(1)));
      return {
        ...m,
        value: newValue,
        trend: variation > 0 ? 'up' : 'down',
      };
    });

    chartData.value.push({
      time: timeStr,
      cpu: metrics.value[0].value,
      memory: metrics.value[1].value,
      network: metrics.value[2].value,
    });

    if (chartData.value.length > 20) chartData.value.shift();

    if (Math.random() > 0.7) {
      const types: LogEntry['type'][] = ['info', 'warning', 'error', 'success'];
      const messages = [
        'System heartbeat detected',
        'Database connection latency high',
        'User authentication failed',
        'Cache cleared successfully',
        'New deployment initiated',
        'Scaling instances up',
      ];
      logs.value.unshift({
        id: Math.random().toString(36).substr(2, 9),
        timestamp: now,
        type: types[Math.floor(Math.random() * types.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
      });
      if (logs.value.length > 50) logs.value.pop();
    }
  };

  onMounted(() => {
    for (let i = 0; i < 20; i++) {
       generateData();
    }
    interval = setInterval(generateData, 2000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return {
    metrics,
    chartData,
    logs,
    isPaused,
    togglePause: () => (isPaused.value = !isPaused.value),
  };
}
