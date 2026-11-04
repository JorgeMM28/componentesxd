<!-- Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — Svelte 5 Runes (components/badges-data/variants/avatar-stack-interactive/AvatarStackInteractive.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-avatar-stack-interactive" data-active={active}>
  <h3>Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario</h3>
  <p>Haz clic en cualquier miembro del equipo para ver su rol, estado y permisos activos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
