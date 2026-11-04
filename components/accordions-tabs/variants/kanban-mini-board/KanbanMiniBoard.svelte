<!-- Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — Svelte 5 Runes (components/accordions-tabs/variants/kanban-mini-board/KanbanMiniBoard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-kanban-mini-board" data-active={active}>
  <h3>Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)</h3>
  <p>Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
