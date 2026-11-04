<!-- Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador) — Vue 3 SFC (components/forms/variants/filter-search-facet/FilterSearchFacet.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-filter-search-facet" :data-active="active">
    <h3>Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)</h3>
    <p>Selecciona etiquetas múltiples y desliza el rango de precio para ver el resumen de filtros activos.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
