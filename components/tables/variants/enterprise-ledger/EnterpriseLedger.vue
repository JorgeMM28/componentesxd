<!--
  ============================================================================
  COMPONENTESXD — 01. Enterprise Financial Ledger Grid (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/enterprise-ledger/EnterpriseLedger.vue
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
    title: '01. Enterprise Financial Ledger Grid',
    badge: 'FINTECH / LEDGER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'enterprise-ledger', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-enterprise-ledger" :data-theme="interfaceTheme">
    <header class="cxd-tables-enterprise-ledger__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-enterprise-ledger__body">
      <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
