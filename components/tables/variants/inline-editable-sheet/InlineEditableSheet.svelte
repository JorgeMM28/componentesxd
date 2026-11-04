<!--
  ============================================================================
  COMPONENTESXD — 05. Inline Editable Data Sheet (SVELTE 5 RUNES)
  Archivo: components/tables/variants/inline-editable-sheet/InlineEditableSheet.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Inline Editable Data Sheet',
    badge = 'SPREADSHEET UI',
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

<section class="cxd-tables-inline-editable-sheet" data-theme={interfaceTheme}>
  <header class="cxd-tables-inline-editable-sheet__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-inline-editable-sheet__body">
    <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('inline-editable-sheet');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
