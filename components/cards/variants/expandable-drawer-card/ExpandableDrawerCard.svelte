<!-- Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — Svelte 5 Runes (components/cards/variants/expandable-drawer-card/ExpandableDrawerCard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-expandable-drawer-card" data-active={active}>
  <h3>Variante 08 — Tarjeta con Despliegue de Detalles Técnicos</h3>
  <p>Haz clic en el botón de expansión para revelar u ocultar el bloque completo de logs y nodos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
