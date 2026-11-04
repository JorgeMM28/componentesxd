<!-- Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — Svelte 5 Runes (components/tables/variants/styleless-minimal/StylelessMinimal.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-styleless-minimal" data-active={active}>
  <h3>Variante 02 — Tabla Styleless (Sin Bordes / Editorial)</h3>
  <p>Sin contenedor exterior ni líneas verticales. Puramente tipográfica con alineación generosa y subrayado sutil.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
