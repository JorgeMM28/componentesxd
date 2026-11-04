<!--
  ============================================================================
  COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/slide-over-inspector-drawer/SlideOverInspectorDrawer.vue
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
    title: '02. Slide-Over Telemetry Inspector Drawer',
    badge: 'SIDE DRAWER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'slide-over-inspector-drawer', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-slide-over-inspector-drawer" :data-theme="interfaceTheme">
    <header class="cxd-modals-slide-over-inspector-drawer__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-slide-over-inspector-drawer__body">
      <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
