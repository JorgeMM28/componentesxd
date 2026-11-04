<!-- Variante 03 — Botón Flotante (FAB) con Menú Desplegable — Svelte 5 Runes (components/buttons/variants/floating-fab-radial/FloatingFabRadial.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-floating-fab-radial" data-active={active}>
  <h3>Variante 03 — Botón Flotante (FAB) con Menú Desplegable</h3>
  <p>Botón circular flotante que al hacer clic despliega 3 acciones satélite con física elástica.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
