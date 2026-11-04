<!-- Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada — Svelte 5 Runes (components/special-hybrids/variants/dual-transfer-stagger-sync/DualTransferStaggerSync.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-dual-transfer-stagger-sync" data-active={active}>
  <h3>Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada</h3>
  <p>Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
