<!--
  ============================================================================
  COMPONENTESXD — 06. Architectural Callout & Warning Block (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/inline-diff-callout/InlineDiffCallout.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Architectural Callout & Warning Block',
    badge = 'CALLOUT BOX',
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

<section class="cxd-toasts-inline-diff-callout" data-theme={interfaceTheme}>
  <header class="cxd-toasts-inline-diff-callout__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-inline-diff-callout__body">
    <p>Bloque de alerta embebido con borde lateral de precisión, icono SVG técnico y acciones correctivas.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('inline-diff-callout');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
