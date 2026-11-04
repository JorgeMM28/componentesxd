<!-- Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — Vue 3 SFC (components/tables/variants/multi-filter-table/MultiFilterTable.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-multi-filter-table" :data-active="active">
    <h3>Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)</h3>
    <p>Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
