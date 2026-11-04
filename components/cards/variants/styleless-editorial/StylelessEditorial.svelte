<!-- Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — Svelte 5 Runes (components/cards/variants/styleless-editorial/StylelessEditorial.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-styleless-editorial" data-active={active}>
  <h3>Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)</h3>
  <p>Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
