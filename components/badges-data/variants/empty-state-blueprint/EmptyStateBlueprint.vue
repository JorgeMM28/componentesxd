<!--
  ============================================================================
  COMPONENTESXD — 06. Technical Wireframe Empty State (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/empty-state-blueprint/EmptyStateBlueprint.vue
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
    title: '06. Technical Wireframe Empty State',
    badge: 'EMPTY STATE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'empty-state-blueprint', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-empty-state-blueprint" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-empty-state-blueprint__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-empty-state-blueprint__body">
      <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
