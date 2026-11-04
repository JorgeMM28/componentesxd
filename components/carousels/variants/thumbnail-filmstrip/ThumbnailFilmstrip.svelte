<!-- Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — Svelte 5 Runes (components/carousels/variants/thumbnail-filmstrip/ThumbnailFilmstrip.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-thumbnail-filmstrip" data-active={active}>
  <h3>Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)</h3>
  <p>Escenario principal de gran formato conectado a una banda interactiva de miniaturas con enfoque activo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
