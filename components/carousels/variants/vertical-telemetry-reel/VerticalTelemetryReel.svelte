<!-- Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y — Svelte 5 Runes (components/carousels/variants/vertical-telemetry-reel/VerticalTelemetryReel.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-vertical-telemetry-reel" data-active={active}>
  <h3>Variante 04 — Carrusel Vertical Tipo Reel / Conmutador de Escenas en Eje Y</h3>
  <p>Transición vertical elástica entre paneles de telemetría con selector lateral numerado y controles arriba/abajo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
