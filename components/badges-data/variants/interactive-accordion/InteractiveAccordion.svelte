<!-- Variante 02 — Acordeón Interactivo Multi-Sección — Svelte 5 Runes (components/badges-data/variants/interactive-accordion/InteractiveAccordion.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-interactive-accordion" data-active={active}>
  <h3>Variante 02 — Acordeón Interactivo Multi-Sección</h3>
  <p>Haz clic en cualquier cabecera para expandir o contraer su contenido suavemente.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
