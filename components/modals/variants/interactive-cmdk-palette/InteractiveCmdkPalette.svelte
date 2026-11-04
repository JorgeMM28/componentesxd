<!-- Variante 02 — Command Palette Interactiva (Buscador en Vivo) — Svelte 5 Runes (components/modals/variants/interactive-cmdk-palette/InteractiveCmdkPalette.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-interactive-cmdk-palette" data-active={active}>
  <h3>Variante 02 — Command Palette Interactiva (Buscador en Vivo)</h3>
  <p>Escribe en el buscador para filtrar comandos al instante y haz clic en cualquiera para ejecutarlo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
