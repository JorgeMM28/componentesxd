<!--
  ============================================================================
  COMPONENTESXD — 07. Segmented Action Bar with Active Pill (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/segmented-mode-group/SegmentedModeGroup.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '07. Segmented Action Bar with Active Pill',
    badge = 'BUTTON GROUP',
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

<section class="cxd-buttons-segmented-mode-group" data-theme={interfaceTheme}>
  <header class="cxd-buttons-segmented-mode-group__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-segmented-mode-group__body">
    <p>Barra de herramientas unificada por bordes de 1px para alternar vistas (Tabla / Tarjetas / Grafo / JSON).</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('segmented-mode-group');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
