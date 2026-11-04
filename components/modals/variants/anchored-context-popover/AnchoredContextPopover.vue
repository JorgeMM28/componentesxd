<!--
  ============================================================================
  COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/anchored-context-popover/AnchoredContextPopover.vue
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
    title: '05. Anchored Context Menu & Quick Popover',
    badge: 'CONTEXT MENU'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'anchored-context-popover', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-anchored-context-popover" :data-theme="interfaceTheme">
    <header class="cxd-modals-anchored-context-popover__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-anchored-context-popover__body">
      <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
