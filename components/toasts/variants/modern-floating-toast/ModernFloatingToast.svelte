<!-- Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — Svelte 5 Runes (components/toasts/variants/modern-floating-toast/ModernFloatingToast.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-modern-floating-toast" data-active={active}>
  <h3>Variante 01 — Toaster Moderno Flotante con Barra de Tiempo</h3>
  <p>Bordes redondeados suaves, icono en cápsula, botón de reinicio de barra de progreso y cierre animado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
