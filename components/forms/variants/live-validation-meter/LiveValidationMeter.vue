<!-- Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — Vue 3 SFC (components/forms/variants/live-validation-meter/LiveValidationMeter.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-live-validation-meter" :data-active="active">
    <h3>Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo</h3>
    <p>Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
