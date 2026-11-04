<!--
  ============================================================================
  COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/otp-security-matrix/OtpSecurityMatrix.vue
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
    title: '02. 6-Digit 2FA OTP Auto-Advance Matrix',
    badge: 'AUTH / 2FA'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'otp-security-matrix', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-otp-security-matrix" :data-theme="interfaceTheme">
    <header class="cxd-forms-otp-security-matrix__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-otp-security-matrix__body">
      <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
