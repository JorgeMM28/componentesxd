<!--
  ============================================================================
  COMPONENTESXD — 05. Split Primary + Context Dropdown Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/split-action-menu/SplitActionMenu.vue
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
    title: '05. Split Primary + Context Dropdown Button',
    badge: 'SPLIT ACTION'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'split-action-menu', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-split-action-menu" :data-theme="interfaceTheme">
    <header class="cxd-buttons-split-action-menu__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-split-action-menu__body">
      <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
