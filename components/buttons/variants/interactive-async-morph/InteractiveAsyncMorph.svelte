<!-- Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — Svelte 5 Runes (components/buttons/variants/interactive-async-morph/InteractiveAsyncMorph.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-interactive-async-morph" data-active={active}>
  <h3>Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)</h3>
  <p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
