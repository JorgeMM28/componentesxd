<!-- Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — Svelte 5 Runes (components/cards/variants/form-embedded-card/FormEmbeddedCard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-form-embedded-card" data-active={active}>
  <h3>Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config</h3>
  <p>Permite ajustar parámetros con inputs y calcular el costo mensual directamente en la tarjeta.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
