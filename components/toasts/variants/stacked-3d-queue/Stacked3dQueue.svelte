<!--
  ============================================================================
  COMPONENTESXD — 02. 3D Perspective Stacked Toast Queue (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/stacked-3d-queue/Stacked3dQueue.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. 3D Perspective Stacked Toast Queue',
    badge = 'STACKED QUEUE',
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

<section class="cxd-toasts-stacked-3d-queue" data-theme={interfaceTheme}>
  <header class="cxd-toasts-stacked-3d-queue__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-stacked-3d-queue__body">
    <p>Cola de notificaciones apiladas en profundidad 3D que se despliegan en abanico al pasar el cursor.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('stacked-3d-queue');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
