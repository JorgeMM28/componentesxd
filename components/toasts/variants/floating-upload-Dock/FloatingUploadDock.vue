<!--
  ============================================================================
  COMPONENTESXD — 07. Multi-File Upload Progress Toaster (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/floating-upload-Dock/FloatingUploadDock.vue
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
    title: '07. Multi-File Upload Progress Toaster',
    badge: 'UPLOAD MANAGER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'floating-upload-Dock', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-floating-upload-Dock" :data-theme="interfaceTheme">
    <header class="cxd-toasts-floating-upload-Dock__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-floating-upload-Dock__body">
      <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
