<!-- Variante 08 — Toaster Interactivo de Subida de Archivos — Svelte 5 Runes (components/toasts/variants/upload-progress-toaster/UploadProgressToaster.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-upload-progress-toaster" data-active={active}>
  <h3>Variante 08 — Toaster Interactivo de Subida de Archivos</h3>
  <p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
