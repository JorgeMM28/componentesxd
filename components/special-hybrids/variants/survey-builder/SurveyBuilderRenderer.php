<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSurveyBuilder(): string { return <<<'HTML'
<section class="cxd-special cxd-survey" data-cxd-control="survey-builder"><header><small>ENCUESTA</small><h3>Prioriza las preguntas</h3></header><ol data-questions><li>Experiencia de búsqueda <button type="button" data-up>↑</button></li><li>Velocidad de carga <button type="button" data-up>↑</button></li><li>Documentación <button type="button" data-up>↑</button></li></ol><button type="button" data-add>Añadir pregunta</button><span role="status">3 preguntas activas.</span></section>
<script type="module">
import { mountSurveyBuilder } from '/assets/survey-builder.js';
document.querySelectorAll('[data-cxd-control="survey-builder"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSurveyBuilder(root); });
</script>
HTML; }
