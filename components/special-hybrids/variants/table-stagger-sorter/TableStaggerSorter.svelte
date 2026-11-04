<!-- Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas — Svelte 5 Runes (components/special-hybrids/variants/table-stagger-sorter/TableStaggerSorter.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-table-stagger-sorter" data-active={active}>
  <h3>Variante 03 — Tabla con Reordenamiento Coreografiado (stagger) y Barras Cinéticas</h3>
  <p>Ordena por latencia, carga o nombre y observa cómo todas las filas y sus barras internas se reacomodan con una onda escalonada.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
