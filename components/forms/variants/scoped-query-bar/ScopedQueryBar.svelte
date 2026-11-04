<!--
  ============================================================================
  COMPONENTESXD — 05. Scoped Filter & Query Input Bar (SVELTE 5 RUNES)
  Archivo: components/forms/variants/scoped-query-bar/ScopedQueryBar.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Scoped Filter & Query Input Bar',
    badge = 'QUERY BUILDER',
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

<section class="cxd-forms-scoped-query-bar" data-theme={interfaceTheme}>
  <header class="cxd-forms-scoped-query-bar__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-scoped-query-bar__body">
    <p>Barra de entrada con selector de ámbito (env:prod, region:us-east) integrado a la izquierda y botón limpiar.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('scoped-query-bar');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
