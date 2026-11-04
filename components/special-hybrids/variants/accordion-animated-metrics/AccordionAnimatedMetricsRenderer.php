<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderAccordionAnimatedMetrics(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="accordion-animated-metrics"><h3>Métricas de servicio</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Expandir métrica</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Métricas contraídas</span></div>
<script type="module">
import { mountAccordionAnimatedMetrics } from '/assets/accordion-animated-metrics.js';
document.querySelectorAll('[data-cxd-control="accordion-animated-metrics"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAccordionAnimatedMetrics(root); });
</script>
HTML; }
