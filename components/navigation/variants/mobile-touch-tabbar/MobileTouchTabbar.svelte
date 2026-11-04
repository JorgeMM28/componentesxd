<!-- Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas — Svelte 5 Runes (components/navigation/variants/mobile-touch-tabbar/MobileTouchTabbar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<nav class="cxd-navigation-mobile-touch-tabbar" data-active={active}>
  <h3>Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas</h3>
  <p>Barra inferior flotante tipo iOS/Android con 5 destinos táctiles, pastilla indicadora animada con Anime.js v4 y badges de notificaciones.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</nav>
