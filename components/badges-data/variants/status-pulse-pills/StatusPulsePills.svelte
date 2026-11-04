<!--
  ============================================================================
  COMPONENTESXD — 01. Semantic Status Badges & Live Pulse Dots (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/status-pulse-pills/StatusPulsePills.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Semantic Status Badges & Live Pulse Dots',
    badge = 'STATUS BADGES',
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

<section class="cxd-badges-data-status-pulse-pills" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-status-pulse-pills__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-status-pulse-pills__body">
    <p>Colección de insignias semánticas (Operational, Degraded, Outage, Maintenance) con indicador luminoso.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('status-pulse-pills');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
