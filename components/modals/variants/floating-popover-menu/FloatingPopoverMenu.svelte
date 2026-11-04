<!-- Variante 03 — Menú Popover Flotante Content-Fit con Acciones — Svelte 5 Runes (components/modals/variants/floating-popover-menu/FloatingPopoverMenu.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-floating-popover-menu" data-active={active}>
  <h3>Variante 03 — Menú Popover Flotante Content-Fit con Acciones</h3>
  <p>Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
