<!-- Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos — Svelte 5 Runes (components/badges-data/variants/vertical-event-timeline/VerticalEventTimeline.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-vertical-event-timeline" data-active={active}>
  <h3>Variante 04 — Línea de Tiempo (Timeline) con Filtro de Eventos</h3>
  <p>Cronología vertical con nodos conectados, estados de despliegue y botón para agregar nuevo evento.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
