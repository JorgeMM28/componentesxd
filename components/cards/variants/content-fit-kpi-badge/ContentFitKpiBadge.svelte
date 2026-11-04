<!-- Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — Svelte 5 Runes (components/cards/variants/content-fit-kpi-badge/ContentFitKpiBadge.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-cards-content-fit-kpi-badge" data-active={active}>
  <h3>Variante 07 — Tarjeta Content-Fit Compacta de Telemetría</h3>
  <p>Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
