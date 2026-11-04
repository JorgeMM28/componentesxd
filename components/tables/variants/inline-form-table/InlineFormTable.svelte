<!-- Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — Svelte 5 Runes (components/tables/variants/inline-form-table/InlineFormTable.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-inline-form-table" data-active={active}>
  <h3>Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)</h3>
  <p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
