<!-- Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — Svelte 5 Runes (components/navigation/variants/styleless-minimal-nav/StylelessMinimalNav.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-styleless-minimal-nav" data-active={active}>
  <h3>Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante</h3>
  <p>Pestañas limpias sin bordes laterales donde la línea activa viaja suavemente al elemento clicado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
