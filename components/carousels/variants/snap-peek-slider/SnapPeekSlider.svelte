<!-- Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — Svelte 5 Runes (components/carousels/variants/snap-peek-slider/SnapPeekSlider.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-snap-peek-slider" data-active={active}>
  <h3>Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso</h3>
  <p>Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
