<!-- Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — Svelte 5 Runes (components/cards/variants/modern-rounded-bento/ModernRoundedBento.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-modern-rounded-bento" data-active={active}>
  <h3>Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial</h3>
  <p>Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
