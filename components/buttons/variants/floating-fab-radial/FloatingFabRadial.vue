<!-- Variante 03 — Botón Flotante (FAB) con Menú Desplegable — Vue 3 SFC (components/buttons/variants/floating-fab-radial/FloatingFabRadial.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-floating-fab-radial" :data-active="active">
    <h3>Variante 03 — Botón Flotante (FAB) con Menú Desplegable</h3>
    <p>Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
