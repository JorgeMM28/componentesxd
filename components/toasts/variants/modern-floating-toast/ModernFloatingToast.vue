<!-- Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — Vue 3 SFC (components/toasts/variants/modern-floating-toast/ModernFloatingToast.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-modern-floating-toast" :data-active="active">
    <h3>Variante 01 — Toaster Moderno Flotante con Barra de Tiempo</h3>
    <p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
