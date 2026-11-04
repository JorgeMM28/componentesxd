<!-- Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax — Svelte 5 Runes (components/special-hybrids/variants/neural-network-graph-propagator/NeuralNetworkGraphPropagator.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-neural-network-graph-propagator" data-active={active}>
  <h3>Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax</h3>
  <p>Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
