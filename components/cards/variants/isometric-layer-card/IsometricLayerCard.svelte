<!--
  ============================================================================
  COMPONENTESXD — 07. 3D Isometric Perspective Hover Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/isometric-layer-card/IsometricLayerCard.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '07. 3D Isometric Perspective Hover Card',
    badge = '3D TILT',
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

<section class="cxd-cards-isometric-layer-card" data-theme={interfaceTheme}>
  <header class="cxd-cards-isometric-layer-card__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-isometric-layer-card__body">
    <p>Calcula ángulos de rotación X/Y según posición del cursor con capas internas en paralaje.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('isometric-layer-card');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
