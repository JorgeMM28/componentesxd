<!--
  ============================================================================
  COMPONENTESXD — 03. Critical Action Verification Modal (VUE 3 COMPOSITION API)
  Archivo: components/modals/variants/destructive-confirm-dialog/DestructiveConfirmDialog.vue
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
    title: '03. Critical Action Verification Modal',
    badge: 'SAFETY DIALOG'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'destructive-confirm-dialog', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-modals-destructive-confirm-dialog" :data-theme="interfaceTheme">
    <header class="cxd-modals-destructive-confirm-dialog__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-modals-destructive-confirm-dialog__body">
      <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
