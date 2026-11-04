<!--
  ============================================================================
  COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/status-pulse-pills/StatusPulsePills.vue
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
    title: '01. Semantic Status Badges & Live Pulse Dots',
    badge: 'STATUS BADGES'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'status-pulse-pills', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-status-pulse-pills" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-status-pulse-pills__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-status-pulse-pills__body">
      <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
