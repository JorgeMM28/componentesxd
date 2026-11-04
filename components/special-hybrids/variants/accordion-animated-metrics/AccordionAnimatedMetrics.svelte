<!-- Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — Svelte 5 Runes (components/special-hybrids/variants/accordion-animated-metrics/AccordionAnimatedMetrics.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-accordion-animated-metrics" data-active={active}>
  <h3>Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir</h3>
  <p>Cada vez que abres una sección del acordeón, sus barras y métricas internas se animan dinámicamente.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
