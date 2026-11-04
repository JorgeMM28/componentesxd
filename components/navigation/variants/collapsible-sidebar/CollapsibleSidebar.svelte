<!-- Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — Svelte 5 Runes (components/navigation/variants/collapsible-sidebar/CollapsibleSidebar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<nav class="cxd-navigation-collapsible-sidebar" data-active={active}>
  <h3>Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster</h3>
  <p>Panel de navegación lateral con botón de colapso cinético (240px ↔ 68px), selector de entorno (Prod/Staging), árbol de módulos e indicador de salud.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</nav>
