<!-- Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación — Svelte 5 Runes (components/carousels/variants/coverflow-3d/Coverflow3d.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-coverflow-3d" data-active={active}>
  <h3>Variante 01 — Carrusel 3D Coverflow con Perspectiva e Inclinación</h3>
  <p>Tarjetas en perspectiva tridimensional donde la diapositiva central avanza al frente y las laterales rotan en eje Y con Anime.js v4.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
