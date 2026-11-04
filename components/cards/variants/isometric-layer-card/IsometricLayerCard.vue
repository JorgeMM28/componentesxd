<!--
  ============================================================================
  COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/isometric-layer-card/IsometricLayerCard.vue
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
    title: '07. 3D Isometric Perspective Hover Card',
    badge: '3D TILT'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'isometric-layer-card', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-isometric-layer-card" :data-theme="interfaceTheme">
    <header class="cxd-cards-isometric-layer-card__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-isometric-layer-card__body">
      <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
