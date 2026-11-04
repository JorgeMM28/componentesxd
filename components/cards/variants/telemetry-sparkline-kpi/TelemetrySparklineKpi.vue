<!--
  ============================================================================
  COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/telemetry-sparkline-kpi/TelemetrySparklineKpi.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';

withDefaults(
  defineProps<{
    title?: string;
    badge?: string;
    interfaceTheme?: string;
  }>(),
  {
    title: '02. Telemetry KPI + SVG Sparkline Card',
    badge: 'LIVE METRIC'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'telemetry-sparkline-kpi', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-telemetry-sparkline-kpi" :data-theme="interfaceTheme">
    <header class="cxd-cards-telemetry-sparkline-kpi__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-telemetry-sparkline-kpi__body">
      <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
