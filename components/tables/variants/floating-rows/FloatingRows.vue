<!-- Variante 04 — Tabla de Filas Flotantes Separadas — Vue 3 SFC (components/tables/variants/floating-rows/FloatingRows.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-floating-rows" :data-active="active">
    <h3>Variante 04 — Tabla de Filas Flotantes Separadas</h3>
    <p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
