<!-- Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva — Svelte 5 Runes (components/cards/variants/floating-3d-tilt/Floating3dTilt.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-floating-3d-tilt" data-active={active}>
  <h3>Variante 03 — Tarjeta Flotante con Perspectiva 3D Interactiva</h3>
  <p>Mueve el cursor encima para inclinar la tarjeta en 3 ejes (rotateX / rotateY) con sombra profunda.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
