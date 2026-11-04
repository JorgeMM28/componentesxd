<!-- Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — Svelte 5 Runes (components/special-hybrids/variants/table-bulk-explosion/TableBulkExplosion.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-table-bulk-explosion" data-active={active}>
  <h3>Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada</h3>
  <p>Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
