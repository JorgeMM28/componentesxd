<script lang="ts">
import { mountStepperCarouselWizard } from './stepper-carousel-wizard.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStepperCarouselWizard(node) }; }
</script>
<div class="cxd-special" data-cxd-control="stepper-carousel-wizard" use:control><div class="cxd-special__progress" role="progressbar" aria-label="Progreso del asistente" aria-valuemin="1" aria-valuemax="3" aria-valuenow="1"><span data-progress></span></div><div class="cxd-special__scene" data-scene><small data-kicker>PASO 01 / 03</small><strong data-title>Elige tu espacio</strong><p data-copy>Organiza tu proyecto en un entorno preparado para crecer.</p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div>
