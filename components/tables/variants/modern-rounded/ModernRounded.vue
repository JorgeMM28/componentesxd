<!-- Variante 01 — Tabla Moderna de Bordes Redondeados — Vue 3 SFC (components/tables/variants/modern-rounded/ModernRounded.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-modern-rounded" :data-active="active">
    <h3>Variante 01 — Tabla Moderna de Bordes Redondeados</h3>
    <p>Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
