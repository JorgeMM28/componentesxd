<!-- Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — Vue 3 SFC (components/tables/variants/crud-actions/CrudActions.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-crud-actions" :data-active="active">
    <h3>Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)</h3>
    <p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
