<!-- Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — Svelte 5 Runes (components/special-hybrids/variants/carousel-spring-physics-deck/CarouselSpringPhysicsDeck.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-carousel-spring-physics-deck" data-active={active}>
  <h3>Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro</h3>
  <p>Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
