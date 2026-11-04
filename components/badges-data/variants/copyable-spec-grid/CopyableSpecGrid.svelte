<!-- Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — Svelte 5 Runes (components/badges-data/variants/copyable-spec-grid/CopyableSpecGrid.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-copyable-spec-grid" data-active={active}>
  <h3>Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila</h3>
  <p>Haz clic en cualquier valor técnico (API Key, Host, SHA) para copiarlo instantáneamente.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
