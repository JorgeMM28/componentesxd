<!--
  ============================================================================
  COMPONENTESXD — 01. Architectural Floating-Label Input (SVELTE 5 RUNES)
  Archivo: components/forms/variants/floating-precision-input/FloatingPrecisionInput.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Architectural Floating-Label Input',
    badge = 'FLOATING LABEL',
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

<section class="cxd-forms-floating-precision-input" data-theme={interfaceTheme}>
  <header class="cxd-forms-floating-precision-input__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-floating-precision-input__body">
    <p>Etiqueta que asciende con transición cúbica al enfocar o contener valor, con indicador de validación.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('floating-precision-input');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
