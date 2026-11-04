<!-- Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales — Svelte 5 Runes (components/special-hybrids/variants/card-3d-exploded-inspector/Card3dExplodedInspector.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-card-3d-exploded-inspector" data-active={active}>
  <h3>Variante 11 — Tarjeta Inspectora + Descomposición 3D de Capas Estructurales</h3>
  <p>Alterna entre la tarjeta ensamblada funcional y su vista explotada isométrica de 4 capas en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
