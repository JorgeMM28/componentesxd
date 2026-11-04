<!--
  ============================================================================
  COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/raycast-command-palette/RaycastCommandPalette.vue
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
    title: '01. Command Palette (Cmd+K) Action Center',
    badge: 'CMD+K PALETTE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'raycast-command-palette', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-raycast-command-palette" :data-theme="interfaceTheme">
    <header class="cxd-modals-raycast-command-palette__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-raycast-command-palette__body">
      <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
