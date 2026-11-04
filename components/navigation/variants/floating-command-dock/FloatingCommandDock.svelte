<!--
  ============================================================================
  COMPONENTESXD — 03. Floating Bottom Command Dock (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/floating-command-dock/FloatingCommandDock.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Floating Bottom Command Dock',
    badge = 'FLOATING DOCK',
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

<section class="cxd-navigation-floating-command-dock" data-theme={interfaceTheme}>
  <header class="cxd-navigation-floating-command-dock__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-floating-command-dock__body">
    <p>Barra flotante inferior con tooltips instantáneos, separadores verticales y accesos rápidos.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('floating-command-dock');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
