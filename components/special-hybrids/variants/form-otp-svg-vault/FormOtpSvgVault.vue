<!-- Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable) — Vue 3 SFC (components/special-hybrids/variants/form-otp-svg-vault/FormOtpSvgVault.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-form-otp-svg-vault" :data-active="active">
    <h3>Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)</h3>
    <p>Simula la validación criptográfica trazando el circuito SVG de seguridad y animando las casillas del código.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
