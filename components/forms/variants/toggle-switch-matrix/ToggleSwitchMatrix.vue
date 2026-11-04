<!--
  ============================================================================
  COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/toggle-switch-matrix/ToggleSwitchMatrix.vue
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
    title: '08. Industrial Toggle Switch & Radio Cards',
    badge: 'SWITCHES'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'toggle-switch-matrix', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-toggle-switch-matrix" :data-theme="interfaceTheme">
    <header class="cxd-forms-toggle-switch-matrix__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-toggle-switch-matrix__body">
      <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
