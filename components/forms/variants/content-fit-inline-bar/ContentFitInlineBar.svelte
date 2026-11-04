<!-- Variante 03 — Formulario Content-Fit en Una Sola Línea — Svelte 5 Runes (components/forms/variants/content-fit-inline-bar/ContentFitInlineBar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-content-fit-inline-bar" data-active={active}>
  <h3>Variante 03 — Formulario Content-Fit en Una Sola Línea</h3>
  <p>Combina selector de prefijo, campo de texto y botón de envío en una sola cápsula compacta.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
