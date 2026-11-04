<!-- Variante 06 — Botón con Menú de Acciones (Split Dropdown) — Svelte 5 Runes (components/buttons/variants/split-dropdown-action/SplitDropdownAction.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-split-dropdown-action" data-active={active}>
  <h3>Variante 06 — Botón con Menú de Acciones (Split Dropdown)</h3>
  <p>Botón dividido: la izquierda ejecuta la acción seleccionada y la derecha despliega la lista de modos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
