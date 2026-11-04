<!--
  ============================================================================
  COMPONENTESXD — 06. Precision Numeric Range & Step Control (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/tactile-range-slider/TactileRangeSlider.vue
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
    title: '06. Precision Numeric Range & Step Control',
    badge: 'RANGE / STEPPER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'tactile-range-slider', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-tactile-range-slider" :data-theme="interfaceTheme">
    <header class="cxd-forms-tactile-range-slider__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-tactile-range-slider__body">
      <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
