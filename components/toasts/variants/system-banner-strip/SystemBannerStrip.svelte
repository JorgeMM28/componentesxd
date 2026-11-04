<!--
  ============================================================================
  COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/system-banner-strip/SystemBannerStrip.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Full-Width Incident & Maintenance Strip',
    badge = 'STATUS BAR',
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

<section class="cxd-toasts-system-banner-strip" data-theme={interfaceTheme}>
  <header class="cxd-toasts-system-banner-strip__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-system-banner-strip__body">
    <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('system-banner-strip');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
