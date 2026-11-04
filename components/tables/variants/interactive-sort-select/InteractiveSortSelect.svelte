<!-- Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo) — Svelte 5 Runes (components/tables/variants/interactive-sort-select/InteractiveSortSelect.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-interactive-sort-select" data-active={active}>
  <h3>Variante 05 — Tabla Interactiva (Ordenamiento + Selección en Vivo)</h3>
  <p>Haz clic en las cabeceras para ordenar filas dinámicamente y marca casillas para activar la barra de lote.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
