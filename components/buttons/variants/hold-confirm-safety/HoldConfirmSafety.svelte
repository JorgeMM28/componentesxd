<!-- Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado) — Svelte 5 Runes (components/buttons/variants/hold-confirm-safety/HoldConfirmSafety.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-hold-confirm-safety" data-active={active}>
  <h3>Variante 05 — Botón con Seguridad Hold-to-Confirm (Mantener Presionado)</h3>
  <p>Mantén presionado el botón para llenar la barra de progreso roja hasta el 100% y ejecutar la acción.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
