<!-- Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — Svelte 5 Runes (components/carousels/variants/card-deck-throw/CardDeckThrow.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-carousels-card-deck-throw" data-active={active}>
  <h3>Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)</h3>
  <p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
