<!-- Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo) — Svelte 5 Runes (components/special-hybrids/variants/carousel-svg-morph-showcase/CarouselSvgMorphShowcase.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-carousel-svg-morph-showcase" data-active={active}>
  <h3>Variante 04 — Carrusel de Escenas + Transformación Geométrica SVG (svg.morphTo)</h3>
  <p>Cada diapositiva del carrusel transforma los vértices del polígono vectorial central e interpola las métricas del sistema.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
