<!-- Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada — Svelte 5 Runes (components/special-hybrids/variants/modal-command-choreography/ModalCommandChoreography.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-modal-command-choreography" data-active={active}>
  <h3>Variante 15 — Command Palette + Consola de Ejecución Paso a Paso Animada</h3>
  <p>Dispara cualquier comando de la lista para ejecutar una secuencia de terminal animada en tiempo real.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
