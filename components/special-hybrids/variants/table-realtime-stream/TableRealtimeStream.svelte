<!-- Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js — Svelte 5 Runes (components/special-hybrids/variants/table-realtime-stream/TableRealtimeStream.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-table-realtime-stream" data-active={active}>
  <h3>Variante 02 — Tabla Reactiva + Formulario de Inserción/Eliminación en Tiempo Real con Anime.js</h3>
  <p>Agrega nuevos registros desde el formulario integrado con animación spring de entrada, recálculo de suma animada y eliminación con colapso suave.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
