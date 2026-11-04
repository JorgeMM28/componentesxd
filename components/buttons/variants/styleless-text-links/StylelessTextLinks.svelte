<!-- Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — Svelte 5 Runes (components/buttons/variants/styleless-text-links/StylelessTextLinks.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-styleless-text-links" data-active={active}>
  <h3>Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)</h3>
  <p>Cero bordes ni fondos: línea inferior que crece de izquierda a derecha y flecha SVG que avanza al pasar el cursor.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
