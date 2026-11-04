<!--
  ============================================================================
  COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/nested-tree-grid/NestedTreeGrid.vue
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
    title: '02. Hierarchical Tree & Sub-Row Table',
    badge: 'TREE / EXPANDABLE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'nested-tree-grid', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-nested-tree-grid" :data-theme="interfaceTheme">
    <header class="cxd-tables-nested-tree-grid__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-nested-tree-grid__body">
      <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
