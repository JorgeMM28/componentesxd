<!-- Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto — Svelte 5 Runes (components/navigation/variants/interactive-breadcrumbs/InteractiveBreadcrumbs.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-interactive-breadcrumbs" data-active={active}>
  <h3>Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto</h3>
  <p>Ruta de navegación con menús desplegables integrados en cada nivel de jerarquía.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
