<!-- Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — Svelte 5 Runes (components/cards/variants/action-toolbar-card/ActionToolbarCard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-action-toolbar-card" data-active={active}>
  <h3>Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)</h3>
  <p>Incluye botones inferiores interactivos con contadores que se actualizan en tiempo real.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
