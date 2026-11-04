<!--
  ============================================================================
  COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/spotlight-radial-bento/SpotlightRadialBento.vue
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
    title: '01. Cursor-Tracking Radial Spotlight Card',
    badge: 'RADIAL LIGHT'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'spotlight-radial-bento', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-spotlight-radial-bento" :data-theme="interfaceTheme">
    <header class="cxd-cards-spotlight-radial-bento__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-spotlight-radial-bento__body">
      <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
