<!--
  ============================================================================
  COMPONENTESXD — 04. Architectural Key-Value Description Grid (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/key-value-spec-list/KeyValueSpecList.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Architectural Key-Value Description Grid',
    badge = 'SPEC LIST',
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

<section class="cxd-badges-data-key-value-spec-list" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-key-value-spec-list__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-key-value-spec-list__body">
    <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('key-value-spec-list');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
