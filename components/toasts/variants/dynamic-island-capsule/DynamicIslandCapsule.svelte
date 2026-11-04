<!--
  ============================================================================
  COMPONENTESXD — 01. Dynamic Island Morphing Capsule (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/dynamic-island-capsule/DynamicIslandCapsule.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '01. Dynamic Island Morphing Capsule',
    badge = 'MORPHING CAPSULE',
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

<section class="cxd-toasts-dynamic-island-capsule" data-theme={interfaceTheme}>
  <header class="cxd-toasts-dynamic-island-capsule__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-dynamic-island-capsule__body">
    <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('dynamic-island-capsule');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
