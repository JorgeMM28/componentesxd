<!-- Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek) — Svelte 5 Runes (components/special-hybrids/variants/carousel-timeline-scrubber/CarouselTimelineScrubber.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-carousel-timeline-scrubber" data-active={active}>
  <h3>Variante 13 — Carrusel Cinético Controlado por Slider Scrubber (timeline.seek)</h3>
  <p>Arrastra la barra de tiempo para controlar manualmente la posición, rotación y escala de todo el carrusel.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
