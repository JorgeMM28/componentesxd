<!-- Variante 05 — Modal de Confirmación con Validación de Texto — Svelte 5 Runes (components/modals/variants/security-confirm-modal/SecurityConfirmModal.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-security-confirm-modal" data-active={active}>
  <h3>Variante 05 — Modal de Confirmación con Validación de Texto</h3>
  <p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
