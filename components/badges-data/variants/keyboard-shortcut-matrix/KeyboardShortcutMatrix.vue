<!--
  ============================================================================
  COMPONENTESXD — 07. Keyboard Shortcut Chord Display (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/keyboard-shortcut-matrix/KeyboardShortcutMatrix.vue
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
    title: '07. Keyboard Shortcut Chord Display',
    badge: 'KBD CHORDS'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'keyboard-shortcut-matrix', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-keyboard-shortcut-matrix" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
      <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
