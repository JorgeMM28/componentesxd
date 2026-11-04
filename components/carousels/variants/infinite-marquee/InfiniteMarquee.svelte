<!-- Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección) — Svelte 5 Runes (components/carousels/variants/infinite-marquee/InfiniteMarquee.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-infinite-marquee" data-active={active}>
  <h3>Variante 02 — Carrusel Marquesina Infinita Continua (Control de Velocidad y Dirección)</h3>
  <p>Cinta continua sin costuras para nodos, métricas o marcas con botones para invertir dirección, pausar o acelerar en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
