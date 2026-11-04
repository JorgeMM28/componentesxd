<!--
  ============================================================================
  COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/action-undo-countdown/ActionUndoCountdown.vue
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
    title: '03. Actionable Undo Toast + Progress Timer',
    badge: 'UNDO / TIMER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'action-undo-countdown', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-action-undo-countdown" :data-theme="interfaceTheme">
    <header class="cxd-toasts-action-undo-countdown__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-action-undo-countdown__body">
      <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
