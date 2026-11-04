<!--
  ============================================================================
  COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/hold-to-confirm/HoldToConfirm.vue
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
    title: '03. Destructive Hold-to-Confirm Button',
    badge: 'SAFETY LOCK'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'hold-to-confirm', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-hold-to-confirm" :data-theme="interfaceTheme">
    <header class="cxd-buttons-hold-to-confirm__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-hold-to-confirm__body">
      <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
