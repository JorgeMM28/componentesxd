<!-- Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — Svelte 5 Runes (components/docker/variants/traefik-tls-proxy/TraefikTlsProxy.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-traefik-tls-proxy" data-active={active}>
  <h3>Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático</h3>
  <p>Enrutamiento dinámico por etiquetas de contenedor y certificados TLS automáticos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
