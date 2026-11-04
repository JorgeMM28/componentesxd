<!-- Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — Svelte 5 Runes (components/forms/variants/styleless-underline-inputs/StylelessUnderlineInputs.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-styleless-underline-inputs" data-active={active}>
  <h3>Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)</h3>
  <p>Sin cajas laterales ni fondo: únicamente una línea inferior que se ilumina al escribir.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
