<!-- Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución — Svelte 5 Runes (components/special-hybrids/variants/chrono-sla-incident-table/ChronoSlaIncidentTable.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-chrono-sla-incident-table" data-active={active}>
  <h3>Variante 20 — Tabla de Incidentes en Vivo + Cronómetro SLA (createTimer) + Resolución</h3>
  <p>Monitorea el tiempo transcurrido en vivo con centésimas de segundo y resuelve incidentes con animación de fila.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
