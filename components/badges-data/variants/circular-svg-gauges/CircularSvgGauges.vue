<!--
  ============================================================================
  COMPONENTESXD — 03. Radial SVG Telemetry Gauges (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/circular-svg-gauges/CircularSvgGauges.vue
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
    title: '03. Radial SVG Telemetry Gauges',
    badge: 'SVG GAUGES'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'circular-svg-gauges', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-circular-svg-gauges" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-circular-svg-gauges__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-circular-svg-gauges__body">
      <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
