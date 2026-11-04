<!-- Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — Svelte 5 Runes (components/navigation/variants/microsoft-cascade-nav/MicrosoftCascadeNav.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-microsoft-cascade-nav" data-active={active}>
  <h3>Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)</h3>
  <p>Selecciona una categoría principal para desplegar sus sub-categorías y luego sus variantes finales.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
