<!-- Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4 — Svelte 5 Runes (components/special-hybrids/variants/isometric-3d-city-cluster/Isometric3dCityCluster.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-isometric-3d-city-cluster" data-active={active}>
  <h3>Variante 27 — Ciudadela Isométrica 3D de Servidores con Onda Espacial 4×4</h3>
  <p>16 torres tridimensionales en perspectiva isométrica real que modulan su elevación Z con stagger 2D radial.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
