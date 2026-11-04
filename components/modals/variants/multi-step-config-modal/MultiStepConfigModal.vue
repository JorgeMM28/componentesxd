<!--
  ============================================================================
  COMPONENTESXD — 04. Stepped Configuration Wizard Modal (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/multi-step-config-modal/MultiStepConfigModal.vue
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
    title: '04. Stepped Configuration Wizard Modal',
    badge: 'WIZARD MODAL'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'multi-step-config-modal', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-multi-step-config-modal" :data-theme="interfaceTheme">
    <header class="cxd-modals-multi-step-config-modal__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-multi-step-config-modal__body">
      <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
