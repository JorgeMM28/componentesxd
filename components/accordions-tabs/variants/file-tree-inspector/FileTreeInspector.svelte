<!-- Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — Svelte 5 Runes (components/accordions-tabs/variants/file-tree-inspector/FileTreeInspector.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-file-tree-inspector" data-active={active}>
  <h3>Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo</h3>
  <p>Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
