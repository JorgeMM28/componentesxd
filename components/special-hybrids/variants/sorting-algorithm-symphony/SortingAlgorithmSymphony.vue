<!-- Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — Vue 3 SFC (components/special-hybrids/variants/sorting-algorithm-symphony/SortingAlgorithmSymphony.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-sorting-algorithm-symphony" :data-active="active">
    <h3>Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)</h3>
    <p>28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
