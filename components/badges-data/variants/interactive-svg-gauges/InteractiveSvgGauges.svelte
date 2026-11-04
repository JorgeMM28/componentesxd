<!-- Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo — Svelte 5 Runes (components/badges-data/variants/interactive-svg-gauges/InteractiveSvgGauges.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-interactive-svg-gauges" data-active={active}>
  <h3>Variante 03 — Medidores Circulares SVG con Control Deslizante en Vivo</h3>
  <p>Mueve el control deslizante para actualizar en tiempo real el porcentaje y los anillos SVG.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
