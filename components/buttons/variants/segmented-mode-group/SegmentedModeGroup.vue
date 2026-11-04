<!--
  ============================================================================
  COMPONENTESXD — 07. Segmented Action Bar with Active Pill (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/segmented-mode-group/SegmentedModeGroup.vue
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
    title: '07. Segmented Action Bar with Active Pill',
    badge: 'BUTTON GROUP'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'segmented-mode-group', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-segmented-mode-group" :data-theme="interfaceTheme">
    <header class="cxd-buttons-segmented-mode-group__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-segmented-mode-group__body">
      <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
