<!--
  ============================================================================
  COMPONENTESXD — 06. Architectural Callout & Warning Block (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/inline-diff-callout/InlineDiffCallout.vue
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
    title: '06. Architectural Callout & Warning Block',
    badge: 'CALLOUT BOX'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'inline-diff-callout', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-inline-diff-callout" :data-theme="interfaceTheme">
    <header class="cxd-toasts-inline-diff-callout__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-inline-diff-callout__body">
      <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
