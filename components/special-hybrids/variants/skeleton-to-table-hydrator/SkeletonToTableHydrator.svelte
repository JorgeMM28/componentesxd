<!-- Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — Svelte 5 Runes (components/special-hybrids/variants/skeleton-to-table-hydrator/SkeletonToTableHydrator.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-skeleton-to-table-hydrator" data-active={active}>
  <h3>Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada</h3>
  <p>Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
