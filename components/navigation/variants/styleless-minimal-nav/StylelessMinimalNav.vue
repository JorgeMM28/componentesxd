<!-- Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — Vue 3 SFC (components/navigation/variants/styleless-minimal-nav/StylelessMinimalNav.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-styleless-minimal-nav" :data-active="active">
    <h3>Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante</h3>
    <p>Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
