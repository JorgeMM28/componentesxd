<!--
  ============================================================================
  COMPONENTESXD — 01. Cursor-Tracking Radial Spotlight Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/spotlight-radial-bento/SpotlightRadialBento.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Cursor-Tracking Radial Spotlight Card',
    badge = 'RADIAL LIGHT',
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

<section class="cxd-cards-spotlight-radial-bento" data-theme={interfaceTheme}>
  <header class="cxd-cards-spotlight-radial-bento__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-spotlight-radial-bento__body">
    <p>Proyecta iluminación radial siguiendo las coordenadas X/Y del puntero sobre el chasis y el borde.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('spotlight-radial-bento');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
