<script lang="ts">
import { mountSurveyBuilder } from './survey-builder.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSurveyBuilder(node) }; }
</script>
<section class="cxd-special cxd-survey" data-cxd-control="survey-builder" use:control><header><small>ENCUESTA</small><h3>Prioriza las preguntas</h3></header><ol data-questions><li>Experiencia de búsqueda <button type="button" data-up>↑</button></li><li>Velocidad de carga <button type="button" data-up>↑</button></li><li>Documentación <button type="button" data-up>↑</button></li></ol><button type="button" data-add>Añadir pregunta</button><span role="status">3 preguntas activas.</span></section>
