<!-- Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath) — Svelte 5 Runes (components/special-hybrids/variants/interactive-world-telemetry-map/InteractiveWorldTelemetryMap.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-interactive-world-telemetry-map" data-active={active}>
  <h3>Variante 22 — Mapa Mundial Interactivo con Rutas de Tráfico en Vivo (svg.createMotionPath)</h3>
  <p>Haz clic en cualquier centro de datos (Tokyo, Frankfurt, New York, São Paulo, Sydney, SF) para redirigir los paquetes luminosos globales y disparar ondas de choque.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
