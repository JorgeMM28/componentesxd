<!--
  ============================================================================
  COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/collapsible-tree-sidebar/CollapsibleTreeSidebar.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Architectural Tree Sidebar Navigation',
    badge = 'APP SIDEBAR',
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

<section class="cxd-navigation-collapsible-tree-sidebar" data-theme={interfaceTheme}>
  <header class="cxd-navigation-collapsible-tree-sidebar__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-collapsible-tree-sidebar__body">
    <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('collapsible-tree-sidebar');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
