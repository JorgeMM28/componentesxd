<!--
  ============================================================================
  COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/scrollspy-toc-rail/ScrollspyTocRail.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Technical Documentation Scrollspy Rail',
    badge = 'TOC RAIL',
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

<section class="cxd-navigation-scrollspy-toc-rail" data-theme={interfaceTheme}>
  <header class="cxd-navigation-scrollspy-toc-rail__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-scrollspy-toc-rail__body">
    <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('scrollspy-toc-rail');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
