<!-- Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — Svelte 5 Runes (components/navigation/variants/desktop-menubar/DesktopMenubar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<nav class="cxd-navigation-desktop-menubar" data-active={active}>
  <h3>Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)</h3>
  <p>Barra horizontal estilo aplicación de escritorio con menús desplegables en cascada al hacer hover o clic, atajos de teclado e indicador de sync.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</nav>
