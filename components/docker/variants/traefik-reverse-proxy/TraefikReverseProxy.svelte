<!--
  ============================================================================
  COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (SVELTE 5 RUNES)
  Archivo: components/docker/variants/traefik-reverse-proxy/TraefikReverseProxy.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Traefik v3 Automatic TLS + Reverse Proxy',
    badge = 'REVERSE PROXY',
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

<section class="cxd-docker-traefik-reverse-proxy" data-theme={interfaceTheme}>
  <header class="cxd-docker-traefik-reverse-proxy__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-docker-traefik-reverse-proxy__body">
    <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('traefik-reverse-proxy');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
