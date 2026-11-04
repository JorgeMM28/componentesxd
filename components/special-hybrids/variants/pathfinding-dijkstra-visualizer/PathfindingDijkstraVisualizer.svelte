<!-- Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga — Svelte 5 Runes (components/special-hybrids/variants/pathfinding-dijkstra-visualizer/PathfindingDijkstraVisualizer.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-pathfinding-dijkstra-visualizer" data-active={active}>
  <h3>Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga</h3>
  <p>Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
