<!--
  ============================================================================
  COMPONENTESXD — 05. Split Primary + Context Dropdown Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/split-action-menu/SplitActionMenu.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Split Primary + Context Dropdown Button',
    badge = 'SPLIT ACTION',
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

<section class="cxd-buttons-split-action-menu" data-theme={interfaceTheme}>
  <header class="cxd-buttons-split-action-menu__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-split-action-menu__body">
    <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('split-action-menu');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
