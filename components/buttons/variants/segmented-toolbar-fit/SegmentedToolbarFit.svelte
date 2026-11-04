<!-- Variante 07 — Barra de Botones Content-Fit con Indicador Activo — Svelte 5 Runes (components/buttons/variants/segmented-toolbar-fit/SegmentedToolbarFit.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-segmented-toolbar-fit" data-active={active}>
  <h3>Variante 07 — Barra de Botones Content-Fit con Indicador Activo</h3>
  <p>Grupo compacto unido donde la selección activa cambia instantáneamente al hacer clic.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
