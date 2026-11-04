<!--
  ============================================================================
  COMPONENTESXD — 05. Anchored Context Menu & Quick Popover (SVELTE 5 RUNES)
  Archivo: components/modals/variants/anchored-context-popover/AnchoredContextPopover.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Anchored Context Menu & Quick Popover',
    badge = 'CONTEXT MENU',
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

<section class="cxd-modals-anchored-context-popover" data-theme={interfaceTheme}>
  <header class="cxd-modals-anchored-context-popover__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-anchored-context-popover__body">
    <p>Menú flotante compacto con separadores de 1px, iconos vectoriales alineados y sub-acciones.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('anchored-context-popover');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
