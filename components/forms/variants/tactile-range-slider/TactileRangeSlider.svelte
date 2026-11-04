<!--
  ============================================================================
  COMPONENTESXD — 06. Precision Numeric Range & Step Control (SVELTE 5 RUNES)
  Archivo: components/forms/variants/tactile-range-slider/TactileRangeSlider.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Precision Numeric Range & Step Control',
    badge = 'RANGE / STEPPER',
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

<section class="cxd-forms-tactile-range-slider" data-theme={interfaceTheme}>
  <header class="cxd-forms-tactile-range-slider__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-tactile-range-slider__body">
    <p>Deslizador calibrado con marcas de graduación, lectura numérica tabular en vivo y botones +/- finos.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('tactile-range-slider');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
