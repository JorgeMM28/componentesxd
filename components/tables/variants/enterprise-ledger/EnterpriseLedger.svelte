<!--
  ============================================================================
  COMPONENTESXD — 01. Enterprise Financial Ledger Grid (SVELTE 5 RUNES)
  Archivo: components/tables/variants/enterprise-ledger/EnterpriseLedger.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Enterprise Financial Ledger Grid',
    badge = 'FINTECH / LEDGER',
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

<section class="cxd-tables-enterprise-ledger" data-theme={interfaceTheme}>
  <header class="cxd-tables-enterprise-ledger__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-enterprise-ledger__body">
    <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('enterprise-ledger');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
