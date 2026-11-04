<!-- Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — Svelte 5 Runes (components/accordions-tabs/variants/accordion-exclusive/AccordionExclusive.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-accordion-exclusive" data-active={active}>
  <h3>Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura</h3>
  <p>Al expandir una sección técnica se cierran automáticamente las demás manteniendo el foco de lectura.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
