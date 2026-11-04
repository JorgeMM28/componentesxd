<!-- Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — Svelte 5 Runes (components/accordions-tabs/variants/segmented-pricing-toggle/SegmentedPricingToggle.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-segmented-pricing-toggle" data-active={active}>
  <h3>Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado</h3>
  <p>Alterna entre facturación mensual y anual aplicando descuento automático e interpolando las tarifas en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
