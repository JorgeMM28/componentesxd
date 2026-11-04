<!--
  ============================================================================
  COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/magnetic-precision/MagneticPrecision.vue
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
    title: '01. Magnetic Cursor-Tracking Button',
    badge: 'MAGNETIC'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'magnetic-precision', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-magnetic-precision" :data-theme="interfaceTheme">
    <header class="cxd-buttons-magnetic-precision__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-magnetic-precision__body">
      <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
