<!--
  ============================================================================
  COMPONENTESXD — 05. Scoped Filter & Query Input Bar (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/scoped-query-bar/ScopedQueryBar.vue
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
    title: '05. Scoped Filter & Query Input Bar',
    badge: 'QUERY BUILDER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'scoped-query-bar', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-scoped-query-bar" :data-theme="interfaceTheme">
    <header class="cxd-forms-scoped-query-bar__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-scoped-query-bar__body">
      <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
