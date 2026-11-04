<!-- Variante 01 — Tabla Moderna de Bordes Redondeados — Svelte 5 Runes (components/tables/variants/modern-rounded/ModernRounded.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-modern-rounded" data-active={active}>
  <h3>Variante 01 — Tabla Moderna de Bordes Redondeados</h3>
  <p>Contenedor con radio amplio de 18px, cabeceras suaves tipo cápsula, avatares circulares y badges pastilla.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
