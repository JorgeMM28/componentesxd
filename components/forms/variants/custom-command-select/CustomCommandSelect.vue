<!--
  ============================================================================
  COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/custom-command-select/CustomCommandSelect.vue
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
    title: '03. Searchable Multi-Option Dropdown Select',
    badge: 'CUSTOM SELECT'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'custom-command-select', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-custom-command-select" :data-theme="interfaceTheme">
    <header class="cxd-forms-custom-command-select__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-custom-command-select__body">
      <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
