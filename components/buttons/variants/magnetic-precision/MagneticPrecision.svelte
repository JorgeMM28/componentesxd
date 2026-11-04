<!--
  ============================================================================
  COMPONENTESXD — 01. Magnetic Cursor-Tracking Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/magnetic-precision/MagneticPrecision.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Magnetic Cursor-Tracking Button',
    badge = 'MAGNETIC',
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

<section class="cxd-buttons-magnetic-precision" data-theme={interfaceTheme}>
  <header class="cxd-buttons-magnetic-precision__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-magnetic-precision__body">
    <p>Calcula el centro geométrico y aplica traslación proporcional al cursor con retorno elástico.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('magnetic-precision');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
