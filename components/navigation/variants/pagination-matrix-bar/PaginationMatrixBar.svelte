<!--
  ============================================================================
  COMPONENTESXD — 06. Full Pagination + Page Size Selector Bar (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/pagination-matrix-bar/PaginationMatrixBar.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Full Pagination + Page Size Selector Bar',
    badge = 'PAGINATION',
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

<section class="cxd-navigation-pagination-matrix-bar" data-theme={interfaceTheme}>
  <header class="cxd-navigation-pagination-matrix-bar__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-pagination-matrix-bar__body">
    <p>Control de paginación con salto directo a página, selector desplegable de filas por vista y rango actual.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('pagination-matrix-bar');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
