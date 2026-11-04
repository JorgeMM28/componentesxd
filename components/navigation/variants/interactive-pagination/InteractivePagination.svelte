<!-- Variante 06 — Barra de Paginación Interactiva con Salto de Página — Svelte 5 Runes (components/navigation/variants/interactive-pagination/InteractivePagination.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-interactive-pagination" data-active={active}>
  <h3>Variante 06 — Barra de Paginación Interactiva con Salto de Página</h3>
  <p>Haz clic en los números o botones Anterior/Siguiente para actualizar la página activa en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
