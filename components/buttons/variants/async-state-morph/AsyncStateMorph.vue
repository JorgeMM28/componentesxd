<!--
  ============================================================================
  COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/async-state-morph/AsyncStateMorph.vue
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
    title: '04. Async 3-State Morph Button (Idle -> Run -> Done)',
    badge: 'STATE MACHINE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'async-state-morph', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-async-state-morph" :data-theme="interfaceTheme">
    <header class="cxd-buttons-async-state-morph__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-async-state-morph__body">
      <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
