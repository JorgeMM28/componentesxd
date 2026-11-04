<!--
  ============================================================================
  COMPONENTESXD — 02. Vertical Deployment & Event Timeline (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/activity-timeline-feed/ActivityTimelineFeed.vue
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
    title: '02. Vertical Deployment & Event Timeline',
    badge: 'TIMELINE FEED'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'activity-timeline-feed', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-activity-timeline-feed" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-activity-timeline-feed__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-activity-timeline-feed__body">
      <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
