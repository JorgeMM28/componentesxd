<!-- Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — Svelte 5 Runes (components/special-hybrids/variants/sorting-algorithm-symphony/SortingAlgorithmSymphony.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-sorting-algorithm-symphony" data-active={active}>
  <h3>Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)</h3>
  <p>28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
