<!--
  ============================================================================
  COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/sliding-indicator-tabs/SlidingIndicatorTabs.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Precision Tab Bar with Sliding Hairline',
    badge = 'TABS BAR',
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

<section class="cxd-navigation-sliding-indicator-tabs" data-theme={interfaceTheme}>
  <header class="cxd-navigation-sliding-indicator-tabs__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-sliding-indicator-tabs__body">
    <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('sliding-indicator-tabs');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
