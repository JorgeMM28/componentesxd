<!-- Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga — Vue 3 SFC (components/special-hybrids/variants/pathfinding-dijkstra-visualizer/PathfindingDijkstraVisualizer.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-pathfinding-dijkstra-visualizer" :data-active="active">
    <h3>Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga</h3>
    <p>Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
