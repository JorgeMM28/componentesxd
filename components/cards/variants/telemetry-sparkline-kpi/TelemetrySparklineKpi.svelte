<!--
  ============================================================================
  COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/telemetry-sparkline-kpi/TelemetrySparklineKpi.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Telemetry KPI + SVG Sparkline Card',
    badge = 'LIVE METRIC',
    interfaceTheme = undefined,
    onAction
  }: {
    title?: string;
    badge?: string;
    interfaceTheme?: string;
    onAction?: (id: string) => void;
  } = $props();

  let count = $state(0);
</script>

<section class="cxd-cards-telemetry-sparkline-kpi" data-theme={interfaceTheme}>
  <header class="cxd-cards-telemetry-sparkline-kpi__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-telemetry-sparkline-kpi__body">
    <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('telemetry-sparkline-kpi');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
