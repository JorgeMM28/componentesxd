<!-- Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer) — Svelte 5 Runes (components/toasts/variants/action-buttons-toast/ActionButtonsToast.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-action-buttons-toast" data-active={active}>
  <h3>Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)</h3>
  <p>Notificación de invitación/despliegue con botones interactivos que confirman o revierten la operación en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
