<!-- Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios) — Svelte 5 Runes (components/forms/variants/tactile-switches-sliders/TactileSwitchesSliders.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-tactile-switches-sliders" data-active={active}>
  <h3>Variante 08 — Controles Interactivos (Switches, Stepper Numérico y Radios)</h3>
  <p>Interruptores animados, contador con botones +/- y selector de tarjetas de opción.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
