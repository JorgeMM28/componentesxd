<!-- Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — Vue 3 SFC (components/special-hybrids/variants/table-realtime-stream/TableRealtimeStream.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-table-realtime-stream" :data-active="active">
    <h3>Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js</h3>
    <p>Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
