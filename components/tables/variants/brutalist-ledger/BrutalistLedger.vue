<!-- Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — Vue 3 SFC (components/tables/variants/brutalist-ledger/BrutalistLedger.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-brutalist-ledger" :data-active="active">
    <h3>Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria</h3>
    <p>Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
