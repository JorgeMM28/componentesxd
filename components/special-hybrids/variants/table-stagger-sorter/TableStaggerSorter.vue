<!-- Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — Vue 3 SFC (components/special-hybrids/variants/table-stagger-sorter/TableStaggerSorter.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-table-stagger-sorter" :data-active="active">
    <h3>Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas</h3>
    <p>Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
