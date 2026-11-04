<!-- Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — Vue 3 SFC (components/tables/variants/interactive-sort-select/InteractiveSortSelect.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-interactive-sort-select" :data-active="active">
    <h3>Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)</h3>
    <p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
