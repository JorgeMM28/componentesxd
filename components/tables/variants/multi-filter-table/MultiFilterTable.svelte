<!-- Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado) — Svelte 5 Runes (components/tables/variants/multi-filter-table/MultiFilterTable.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-multi-filter-table" data-active={active}>
  <h3>Variante 08 — Tabla con Filtros Avanzados (Buscador + Categoría + Estado)</h3>
  <p>Barra superior con buscador instantáneo, selector de departamento y botones de estado combinables.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
