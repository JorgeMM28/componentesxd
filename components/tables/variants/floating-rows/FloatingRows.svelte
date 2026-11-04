<!-- Variante 04 — Tabla de Filas Flotantes Separadas — Svelte 5 Runes (components/tables/variants/floating-rows/FloatingRows.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-floating-rows" data-active={active}>
  <h3>Variante 04 — Tabla de Filas Flotantes Separadas</h3>
  <p>Cada fila es una tarjeta independiente con sombra propia, bordes redondeados y elevación al pasar el cursor.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
