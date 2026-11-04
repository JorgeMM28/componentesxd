<!--
  ============================================================================
  COMPONENTESXD — 01. Command Palette (Cmd+K) Action Center (SVELTE 5 RUNES)
  Archivo: components/modals/variants/raycast-command-palette/RaycastCommandPalette.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Command Palette (Cmd+K) Action Center',
    badge = 'CMD+K PALETTE',
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

<section class="cxd-modals-raycast-command-palette" data-theme={interfaceTheme}>
  <header class="cxd-modals-raycast-command-palette__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-raycast-command-palette__body">
    <p>Buscador universal de comandos con filtrado instantáneo, navegación por flechas y atajos de teclado.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('raycast-command-palette');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
