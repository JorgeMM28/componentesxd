<!-- Variante 01 — Modal Moderno con Bordes Redondeados y Blur — Svelte 5 Runes (components/modals/variants/modern-glass-modal/ModernGlassModal.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-modern-glass-modal" data-active={active}>
  <h3>Variante 01 — Modal Moderno con Bordes Redondeados y Blur</h3>
  <p>Ventana de diálogo con cabecera limpia, cuerpo estructurado y botones que abren/cierran la vista.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
