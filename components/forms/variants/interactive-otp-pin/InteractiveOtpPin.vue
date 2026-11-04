<!-- Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — Vue 3 SFC (components/forms/variants/interactive-otp-pin/InteractiveOtpPin.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-interactive-otp-pin" :data-active="active">
    <h3>Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)</h3>
    <p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
