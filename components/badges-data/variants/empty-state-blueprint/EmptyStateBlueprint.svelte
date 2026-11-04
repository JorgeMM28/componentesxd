<!--
  ============================================================================
  COMPONENTESXD — 06. Technical Wireframe Empty State (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/empty-state-blueprint/EmptyStateBlueprint.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Technical Wireframe Empty State',
    badge = 'EMPTY STATE',
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

<section class="cxd-badges-data-empty-state-blueprint" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-empty-state-blueprint__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-empty-state-blueprint__body">
    <p>Estado vacío con ilustración geométrica en SVG, explicación clara y acción rápida de creación.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('empty-state-blueprint');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
