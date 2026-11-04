<!-- Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — Vue 3 SFC (components/buttons/variants/hold-confirm-safety/HoldConfirmSafety.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-hold-confirm-safety" :data-active="active">
    <h3>Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)</h3>
    <p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
