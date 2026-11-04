<!-- Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — Svelte 5 Runes (components/accordions-tabs/variants/transfer-dual-list/TransferDualList.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-transfer-dual-list" data-active={active}>
  <h3>Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)</h3>
  <p>Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
