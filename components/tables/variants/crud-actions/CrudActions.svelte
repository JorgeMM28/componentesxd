<!-- Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — Svelte 5 Runes (components/tables/variants/crud-actions/CrudActions.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-crud-actions" data-active={active}>
  <h3>Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)</h3>
  <p>Botones funcionales en cada fila para cambiar estado, duplicar registro o eliminar con animación Anime.js.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
