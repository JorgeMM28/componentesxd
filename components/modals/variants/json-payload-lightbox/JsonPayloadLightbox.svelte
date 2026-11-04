<!--
  ============================================================================
  COMPONENTESXD — 06. Raw JSON / Schema Diff Modal Inspector (SVELTE 5 RUNES)
  Archivo: components/modals/variants/json-payload-lightbox/JsonPayloadLightbox.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Raw JSON / Schema Diff Modal Inspector',
    badge = 'PAYLOAD VIEWER',
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

<section class="cxd-modals-json-payload-lightbox" data-theme={interfaceTheme}>
  <header class="cxd-modals-json-payload-lightbox__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-json-payload-lightbox__body">
    <p>Visor modal con numeración de líneas, plegado de nodos y copiado directo de estructuras JSON.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('json-payload-lightbox');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
