<!--
  ============================================================================
  COMPONENTESXD — 02. Conic Border Beam Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/conic-border-beam/ConicBorderBeam.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Conic Border Beam Button',
    badge = 'CSS @PROPERTY',
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

<section class="cxd-buttons-conic-border-beam" data-theme={interfaceTheme}>
  <header class="cxd-buttons-conic-border-beam__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-conic-border-beam__body">
    <p>Haz de luz perimetral continuo renderizado por GPU mediante @property sin elementos DOM extra.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('conic-border-beam');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
