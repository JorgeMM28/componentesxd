<!-- Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — Vue 3 SFC (components/special-hybrids/variants/table-bulk-explosion/TableBulkExplosion.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-table-bulk-explosion" :data-active="active">
    <h3>Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada</h3>
    <p>Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
