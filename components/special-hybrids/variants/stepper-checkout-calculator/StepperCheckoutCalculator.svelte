<!-- Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real — Svelte 5 Runes (components/special-hybrids/variants/stepper-checkout-calculator/StepperCheckoutCalculator.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-stepper-checkout-calculator" data-active={active}>
  <h3>Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real</h3>
  <p>Avanza por las etapas de hardware, red y réplicas recalculando el costo mensual con animación numérica instantánea.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
