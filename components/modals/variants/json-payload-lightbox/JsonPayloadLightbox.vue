<!--
  ============================================================================
  COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/json-payload-lightbox/JsonPayloadLightbox.vue
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
    title: '06. Raw JSON / Schema Diff Modal Inspector',
    badge: 'PAYLOAD VIEWER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'json-payload-lightbox', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-json-payload-lightbox" :data-theme="interfaceTheme">
    <header class="cxd-modals-json-payload-lightbox__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-json-payload-lightbox__body">
      <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
