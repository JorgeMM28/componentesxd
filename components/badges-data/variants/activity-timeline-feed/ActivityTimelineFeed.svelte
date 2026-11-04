<!--
  ============================================================================
  COMPONENTESXD — 02. Vertical Deployment & Event Timeline (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/activity-timeline-feed/ActivityTimelineFeed.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Vertical Deployment & Event Timeline',
    badge = 'TIMELINE FEED',
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

<section class="cxd-badges-data-activity-timeline-feed" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-activity-timeline-feed__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-activity-timeline-feed__body">
    <p>Línea de tiempo técnica con nodos vectoriales conectados, autor, timestamp relativo y metadatos.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('activity-timeline-feed');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
