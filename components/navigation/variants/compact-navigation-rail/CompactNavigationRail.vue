<!-- Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — Vue 3 SFC (components/navigation/variants/compact-navigation-rail/CompactNavigationRail.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <nav class="cxd-navigation-compact-navigation-rail" :data-active="active">
    <h3>Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos</h3>
    <p>Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </nav>
</template>
