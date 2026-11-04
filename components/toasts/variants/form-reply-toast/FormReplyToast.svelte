<!-- Variante 04 — Toaster con Formulario de Respuesta Rápida — Svelte 5 Runes (components/toasts/variants/form-reply-toast/FormReplyToast.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-form-reply-toast" data-active={active}>
  <h3>Variante 04 — Toaster con Formulario de Respuesta Rápida</h3>
  <p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
