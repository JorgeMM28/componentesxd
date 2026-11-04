<!--
  ============================================================================
  COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/realtime-log-stream/RealtimeLogStream.vue
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
    title: '03. Realtime Telemetry & Log Stream Table',
    badge: 'NOC / STREAMING'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'realtime-log-stream', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-realtime-log-stream" :data-theme="interfaceTheme">
    <header class="cxd-tables-realtime-log-stream__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-realtime-log-stream__body">
      <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
