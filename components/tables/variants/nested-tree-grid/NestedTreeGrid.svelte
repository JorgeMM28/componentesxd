<!--
  ============================================================================
  COMPONENTESXD — 02. Hierarchical Tree & Sub-Row Table (SVELTE 5 RUNES)
  Archivo: components/tables/variants/nested-tree-grid/NestedTreeGrid.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Hierarchical Tree & Sub-Row Table',
    badge = 'TREE / EXPANDABLE',
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

<section class="cxd-tables-nested-tree-grid" data-theme={interfaceTheme}>
  <header class="cxd-tables-nested-tree-grid__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-nested-tree-grid__body">
    <p>Tabla jerárquica con filas padre/hijo desplegables para desglose de clusters, microservicios, carpetas o centros de costos.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('nested-tree-grid');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
