<!-- Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — Vue 3 SFC (components/tables/variants/content-fit-compact/ContentFitCompact.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-content-fit-compact" :data-active="active">
    <h3>Variante 03 — Tabla Content-Fit (Ajustada al Contenido)</h3>
    <p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
