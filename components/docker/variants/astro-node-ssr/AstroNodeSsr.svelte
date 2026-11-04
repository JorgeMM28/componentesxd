<!-- Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — Svelte 5 Runes (components/docker/variants/astro-node-ssr/AstroNodeSsr.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-astro-node-ssr" data-active={active}>
  <h3>Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR</h3>
  <p>Contenedor de producción de 3 etapas (deps → builder → runner sin root) para Astro, Next o Remix.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
