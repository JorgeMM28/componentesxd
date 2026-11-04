<!-- Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance) — Svelte 5 Runes (components/forms/variants/interactive-otp-pin/InteractiveOtpPin.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-interactive-otp-pin" data-active={active}>
  <h3>Variante 05 — Matriz Interactiva OTP de 6 Dígitos (Auto-Avance)</h3>
  <p>Escribe números para avanzar automáticamente de casilla o usa el botón de autocompletar código.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
