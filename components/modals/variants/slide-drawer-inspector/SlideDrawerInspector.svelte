<!-- Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — Svelte 5 Runes (components/modals/variants/slide-drawer-inspector/SlideDrawerInspector.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-slide-drawer-inspector" data-active={active}>
  <h3>Variante 06 — Panel Inspector Lateral (Drawer de Detalles)</h3>
  <p>Estructura de panel lateral con pestañas de propiedades, JSON en vivo y botones de acción.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
