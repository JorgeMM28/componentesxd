<!-- Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones) — Svelte 5 Runes (components/carousels/variants/split-editorial-showcase/SplitEditorialShowcase.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-split-editorial-showcase" data-active={active}>
  <h3>Variante 05 — Carrusel Split-Screen Sincronizado (Arte Visual + Especificaciones)</h3>
  <p>Doble panel donde el lienzo visual izquierdo y la ficha técnica derecha se actualizan de forma coordinada con stagger.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
