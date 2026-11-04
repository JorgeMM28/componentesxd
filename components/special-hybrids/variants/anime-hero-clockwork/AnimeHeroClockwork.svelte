<!-- Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — Svelte 5 Runes (components/special-hybrids/variants/anime-hero-clockwork/AnimeHeroClockwork.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-anime-hero-clockwork" data-active={active}>
  <h3>Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)</h3>
  <p>36 vectores radiales concéntricos, anillos orbitales y matriz sincronizada que ejecutan coreografías de relojería, explosión solar, vórtice espiral y pulso cuántico.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
