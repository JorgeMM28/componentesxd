<!--
  ============================================================================
  COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (SVELTE 5 RUNES)
  Archivo: components/tables/variants/realtime-log-stream/RealtimeLogStream.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Realtime Telemetry & Log Stream Table',
    badge = 'NOC / STREAMING',
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

<section class="cxd-tables-realtime-log-stream" data-theme={interfaceTheme}>
  <header class="cxd-tables-realtime-log-stream__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-realtime-log-stream__body">
    <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('realtime-log-stream');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
