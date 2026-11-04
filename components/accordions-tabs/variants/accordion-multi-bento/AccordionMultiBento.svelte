<!-- Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — Svelte 5 Runes (components/accordions-tabs/variants/accordion-multi-bento/AccordionMultiBento.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-accordion-multi-bento" data-active={active}>
  <h3>Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador</h3>
  <p>Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
