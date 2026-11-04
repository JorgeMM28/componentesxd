<!-- Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador) — Svelte 5 Runes (components/forms/variants/filter-search-facet/FilterSearchFacet.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-filter-search-facet" data-active={active}>
  <h3>Variante 07 — Panel de Filtros Interactivos (Chips + Rango + Buscador)</h3>
  <p>Selecciona etiquetas múltiples y desliza el rango de precio para ver el resumen de filtros activos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
