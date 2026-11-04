<!--
  ============================================================================
  COMPONENTESXD — 02. Slide-Over Telemetry Inspector Drawer (SVELTE 5 RUNES)
  Archivo: components/modals/variants/slide-over-inspector-drawer/SlideOverInspectorDrawer.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Slide-Over Telemetry Inspector Drawer',
    badge = 'SIDE DRAWER',
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

<section class="cxd-modals-slide-over-inspector-drawer" data-theme={interfaceTheme}>
  <header class="cxd-modals-slide-over-inspector-drawer__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-slide-over-inspector-drawer__body">
    <p>Panel lateral deslizable para inspeccionar metadatos de una fila, logs o configuración sin perder contexto.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('slide-over-inspector-drawer');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
