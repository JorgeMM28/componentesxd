<!--
  ============================================================================
  COMPONENTESXD — 01. Architectural Floating-Label Input (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/floating-precision-input/FloatingPrecisionInput.vue
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
    title: '01. Architectural Floating-Label Input',
    badge: 'FLOATING LABEL'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'floating-precision-input', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-floating-precision-input" :data-theme="interfaceTheme">
    <header class="cxd-forms-floating-precision-input__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-floating-precision-input__body">
      <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
