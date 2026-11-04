<!-- Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — Svelte 5 Runes (components/docker/variants/spa-nginx-alpine/SpaNginxAlpine.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-spa-nginx-alpine" data-active={active}>
  <h3>Variante 03 — React / Vue / Svelte / Angular SPA + Nginx</h3>
  <p>Compilación estática servida por Nginx Alpine con compresión gzip y try_files para rutas SPA.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
