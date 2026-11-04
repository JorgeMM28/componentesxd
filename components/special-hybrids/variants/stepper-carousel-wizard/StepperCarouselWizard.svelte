<!-- Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline — Svelte 5 Runes (components/special-hybrids/variants/stepper-carousel-wizard/StepperCarouselWizard.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-stepper-carousel-wizard" data-active={active}>
  <h3>Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline</h3>
  <p>Asistente paso a paso donde avanzar o retroceder sincroniza la barra de progreso superior, desliza el carrusel 3D y anima los sub-elementos con stagger.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
