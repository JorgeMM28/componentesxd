<!-- Variante 04 — Tarjeta Interactiva con Pestañas Internas — Svelte 5 Runes (components/cards/variants/interactive-tabbed-card/InteractiveTabbedCard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-interactive-tabbed-card" data-active={active}>
  <h3>Variante 04 — Tarjeta Interactiva con Pestañas Internas</h3>
  <p>Alterna entre Resumen, Métricas y Configuración dentro de la misma tarjeta sin recargar.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
