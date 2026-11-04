<!--
  ============================================================================
  COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/password-entropy-meter/PasswordEntropyMeter.vue
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
    title: '04. Password Input + Live Entropy Analyzer',
    badge: 'SECURITY METER'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'password-entropy-meter', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-password-entropy-meter" :data-theme="interfaceTheme">
    <header class="cxd-forms-password-entropy-meter__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-password-entropy-meter__body">
      <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
