<!--
  ============================================================================
  COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (SVELTE 5 RUNES)
  Archivo: components/docker/variants/spa-nginx-brotli/SpaNginxBrotli.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. React / Vue / Svelte / Angular SPA + Nginx',
    badge = 'NGINX ALPINE',
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

<section class="cxd-docker-spa-nginx-brotli" data-theme={interfaceTheme}>
  <header class="cxd-docker-spa-nginx-brotli__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-docker-spa-nginx-brotli__body">
    <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('spa-nginx-brotli');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
