<!-- Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria — Svelte 5 Runes (components/tables/variants/brutalist-ledger/BrutalistLedger.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-brutalist-ledger" data-active={active}>
  <h3>Variante 10 — Tabla Industrial Cebra con Pie de Sumatoria</h3>
  <p>Alto contraste con filas alternadas (zebra), bordes marcados de 2px y fila tfoot de balance total.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
