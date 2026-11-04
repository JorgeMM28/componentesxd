<!--
  ============================================================================
  COMPONENTESXD — 03. Radial SVG Telemetry Gauges (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/circular-svg-gauges/CircularSvgGauges.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Radial SVG Telemetry Gauges',
    badge = 'SVG GAUGES',
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

<section class="cxd-badges-data-circular-svg-gauges" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-circular-svg-gauges__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-circular-svg-gauges__body">
    <p>Medidores circulares y semicirculares en SVG puro para CPU, Memoria, Disco y SLA.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('circular-svg-gauges');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
