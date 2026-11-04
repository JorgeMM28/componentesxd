<!--
  ============================================================================
  COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/pagination-matrix-bar/PaginationMatrixBar.vue
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
    title: '06. Full Pagination + Page Size Selector Bar',
    badge: 'PAGINATION'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'pagination-matrix-bar', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-pagination-matrix-bar" :data-theme="interfaceTheme">
    <header class="cxd-navigation-pagination-matrix-bar__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-pagination-matrix-bar__body">
      <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
