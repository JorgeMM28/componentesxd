<!-- Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa) — Svelte 5 Runes (components/carousels/variants/autoplay-story-bars/AutoplayStoryBars.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-autoplay-story-bars" data-active={active}>
  <h3>Variante 07 — Carrusel con Barras de Tiempo Segmentadas (Autoplay + Pausa)</h3>
  <p>Cabecera con segmentos de progreso temporales que avanzan automáticamente y permiten saltar a cualquier historia.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
