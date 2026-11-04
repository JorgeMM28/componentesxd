<!--
  ============================================================================
  COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/stacked-3d-queue/Stacked3dQueue.vue
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
    title: '02. 3D Perspective Stacked Toast Queue',
    badge: 'STACKED QUEUE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'stacked-3d-queue', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-stacked-3d-queue" :data-theme="interfaceTheme">
    <header class="cxd-toasts-stacked-3d-queue__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-stacked-3d-queue__body">
      <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
