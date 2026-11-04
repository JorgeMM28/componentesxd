<!-- Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — Svelte 5 Runes (components/special-hybrids/variants/kanban-spring-pipeline/KanbanSpringPipeline.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-kanban-spring-pipeline" data-active={active}>
  <h3>Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada</h3>
  <p>Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
