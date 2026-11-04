<!-- Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — Svelte 5 Runes (components/badges-data/variants/modern-pulse-badges/ModernPulseBadges.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-badges-data-modern-pulse-badges" data-active={active}>
  <h3>Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante</h3>
  <p>Insignias redondeadas, cuadradas, sin bordes y con botón de cierre eliminable en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
