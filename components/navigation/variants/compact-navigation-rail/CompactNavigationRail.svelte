<!-- Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — Svelte 5 Runes (components/navigation/variants/compact-navigation-rail/CompactNavigationRail.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<nav class="cxd-navigation-compact-navigation-rail" data-active={active}>
  <h3>Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos</h3>
  <p>Riel de navegación vertical ultra-delgado de 56px para consolas cloud con iconos vectoriales, tooltips flotantes e indicador de nodo activo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</nav>
