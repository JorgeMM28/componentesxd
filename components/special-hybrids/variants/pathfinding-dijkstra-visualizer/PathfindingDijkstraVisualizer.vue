<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountPathfindingDijkstraVisualizer } from './pathfinding-dijkstra-visualizer.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountPathfindingDijkstraVisualizer(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="pathfinding-dijkstra-visualizer" ref="root"><h3>Explorador de rutas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Buscar ruta</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Laberinto restaurado</span></div></template>
