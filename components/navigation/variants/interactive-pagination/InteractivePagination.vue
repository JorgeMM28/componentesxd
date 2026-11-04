<!-- Variante 06 — Barra de Paginación Interactiva con Salto de Página — Vue 3 SFC (components/navigation/variants/interactive-pagination/InteractivePagination.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-interactive-pagination" :data-active="active">
    <h3>Variante 06 — Barra de Paginación Interactiva con Salto de Página</h3>
    <p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
