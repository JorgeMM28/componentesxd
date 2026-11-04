<!--
  ============================================================================
  COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/matrix-comparison/MatrixComparison.vue
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
    title: '04. Sticky Spec & Feature Comparison Matrix',
    badge: 'SPEC MATRIX'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'matrix-comparison', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-matrix-comparison" :data-theme="interfaceTheme">
    <header class="cxd-tables-matrix-comparison__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-matrix-comparison__body">
      <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
