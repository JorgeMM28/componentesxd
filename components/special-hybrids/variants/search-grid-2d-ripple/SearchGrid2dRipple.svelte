<!-- Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — Svelte 5 Runes (components/special-hybrids/variants/search-grid-2d-ripple/SearchGrid2dRipple.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-search-grid-2d-ripple" data-active={active}>
  <h3>Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)</h3>
  <p>Haz clic en cualquier nodo del cluster o filtra por estado para expandir una onda 2D desde ese punto exacto.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
