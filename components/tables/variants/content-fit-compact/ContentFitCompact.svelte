<!-- Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — Svelte 5 Runes (components/tables/variants/content-fit-compact/ContentFitCompact.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-content-fit-compact" data-active={active}>
  <h3>Variante 03 — Tabla Content-Fit (Ajustada al Contenido)</h3>
  <p>Ancho automático exacto al texto (width: max-content), celdas ultra-compactas sin espacio desperdiciado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
