<!--
  ============================================================================
  COMPONENTESXD — 02. Conic Border Beam Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/conic-border-beam/ConicBorderBeam.vue
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
    title: '02. Conic Border Beam Button',
    badge: 'CSS @PROPERTY'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'conic-border-beam', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-conic-border-beam" :data-theme="interfaceTheme">
    <header class="cxd-buttons-conic-border-beam__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-conic-border-beam__body">
      <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
