<!--
  ============================================================================
  COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/hardware-module-card/HardwareModuleCard.vue
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
    title: '08. Teenage-Style Hardware Synth Module Card',
    badge: 'INDUSTRIAL UI'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'hardware-module-card', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-hardware-module-card" :data-theme="interfaceTheme">
    <header class="cxd-cards-hardware-module-card__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-hardware-module-card__body">
      <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
