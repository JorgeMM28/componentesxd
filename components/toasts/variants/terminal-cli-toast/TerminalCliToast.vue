<!--
  ============================================================================
  COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/terminal-cli-toast/TerminalCliToast.vue
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
    title: '04. CLI & Webhook Telemetry Toast',
    badge: 'DEV / WEBHOOK'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'terminal-cli-toast', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-terminal-cli-toast" :data-theme="interfaceTheme">
    <header class="cxd-toasts-terminal-cli-toast__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-terminal-cli-toast__body">
      <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
