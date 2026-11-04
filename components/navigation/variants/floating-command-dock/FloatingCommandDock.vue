<!--
  ============================================================================
  COMPONENTESXD — 03. Floating Bottom Command Dock (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/floating-command-dock/FloatingCommandDock.vue
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
    title: '03. Floating Bottom Command Dock',
    badge: 'FLOATING DOCK'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'floating-command-dock', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-floating-command-dock" :data-theme="interfaceTheme">
    <header class="cxd-navigation-floating-command-dock__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-floating-command-dock__body">
      <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
