<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderVerticalEventTimeline(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="vertical-event-timeline"><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div class="cxd-data__list" data-list aria-live="polite"><div class="cxd-data__item">Despliegue completado</div><div class="cxd-data__item">Archivos sincronizados</div></div></div>
<script type="module">
import { mountVerticalEventTimeline } from '/assets/vertical-event-timeline.js';
document.querySelectorAll('[data-cxd-control="vertical-event-timeline"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountVerticalEventTimeline(root); });
</script>
HTML; }
