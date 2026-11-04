<!-- Variante 08 — Botón Mecánico 3D de Presión Física — Svelte 5 Runes (components/buttons/variants/brutalist-3d-push/Brutalist3dPush.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-brutalist-3d-push" data-active={active}>
  <h3>Variante 08 — Botón Mecánico 3D de Presión Física</h3>
  <p>Borde grueso y sombra sólida inferior que se hunde físicamente cada vez que lo presionas.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
