<!-- Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — Svelte 5 Runes (components/tables/variants/expandable-detail/ExpandableDetail.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-tables-expandable-detail" data-active={active}>
  <h3>Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)</h3>
  <p>Haz clic en cualquier fila para desplegar un panel técnico con historial, métricas y especificaciones.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
