<!-- Variante 04 — Inputs con Etiqueta Flotante Animada — Svelte 5 Runes (components/forms/variants/floating-label-inputs/FloatingLabelInputs.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-floating-label-inputs" data-active={active}>
  <h3>Variante 04 — Inputs con Etiqueta Flotante Animada</h3>
  <p>La etiqueta viaja suavemente hacia el borde superior cuando haces clic o escribes contenido.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
