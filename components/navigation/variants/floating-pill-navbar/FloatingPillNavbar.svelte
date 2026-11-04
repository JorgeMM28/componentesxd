<!-- Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — Svelte 5 Runes (components/navigation/variants/floating-pill-navbar/FloatingPillNavbar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-navigation-floating-pill-navbar" data-active={active}>
  <h3>Variante 02 — Navbar Flotante Redondeada Tipo Cápsula</h3>
  <p>Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
