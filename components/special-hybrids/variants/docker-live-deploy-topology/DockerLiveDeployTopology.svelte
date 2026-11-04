<!-- Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — Svelte 5 Runes (components/special-hybrids/variants/docker-live-deploy-topology/DockerLiveDeployTopology.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-docker-live-deploy-topology" data-active={active}>
  <h3>Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js</h3>
  <p>Envía paquetes de prueba a través del proxy, aplicación y base de datos animando cada salto y latencia.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
