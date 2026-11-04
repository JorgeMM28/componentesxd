<!--
  ============================================================================
  COMPONENTESXD — 05. Inline Editable Data Sheet (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/inline-editable-sheet/InlineEditableSheet.vue
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
    title: '05. Inline Editable Data Sheet',
    badge: 'SPREADSHEET UI'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'inline-editable-sheet', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-inline-editable-sheet" :data-theme="interfaceTheme">
    <header class="cxd-tables-inline-editable-sheet__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-inline-editable-sheet__body">
      <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
