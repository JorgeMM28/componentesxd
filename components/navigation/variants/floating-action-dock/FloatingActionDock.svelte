<!-- Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — Svelte 5 Runes (components/navigation/variants/floating-action-dock/FloatingActionDock.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-floating-action-dock" data-active={active}>
  <h3>Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor</h3>
  <p>Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
