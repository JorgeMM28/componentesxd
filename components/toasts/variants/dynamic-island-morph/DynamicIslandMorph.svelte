<!-- Variante 02 — Dynamic Island Interactiva (3 Estados) — Svelte 5 Runes (components/toasts/variants/dynamic-island-morph/DynamicIslandMorph.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-dynamic-island-morph" data-active={active}>
  <h3>Variante 02 — Dynamic Island Interactiva (3 Estados)</h3>
  <p>Cápsula negra brillante que cambia de tamaño con Anime.js entre Compacto, Llamada/Proceso y Expandido.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
