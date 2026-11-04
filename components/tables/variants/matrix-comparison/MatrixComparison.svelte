<!--
  ============================================================================
  COMPONENTESXD — 04. Sticky Spec & Feature Comparison Matrix (SVELTE 5 RUNES)
  Archivo: components/tables/variants/matrix-comparison/MatrixComparison.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Sticky Spec & Feature Comparison Matrix',
    badge = 'SPEC MATRIX',
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

<section class="cxd-tables-matrix-comparison" data-theme={interfaceTheme}>
  <header class="cxd-tables-matrix-comparison__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-matrix-comparison__body">
    <p>Tabla comparativa con primera columna fija, indicadores vectoriales SVG de soporte, límites técnicos y cabeceras congeladas.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('matrix-comparison');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
