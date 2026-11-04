<!-- Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas — Svelte 5 Runes (components/special-hybrids/variants/pricing-slider-odometer/PricingSliderOdometer.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-pricing-slider-odometer" data-active={active}>
  <h3>Variante 16 — Calculadora Interactiva con Slider + Odómetro + Barras Comparativas</h3>
  <p>Ajusta el volumen de tráfico para animar simultáneamente las barras de los 3 planes y el costo estimado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
