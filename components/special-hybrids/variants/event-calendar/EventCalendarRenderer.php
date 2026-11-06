<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderEventCalendar(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="event-calendar"><header><small>CALENDARIO DE EVENTOS</small><h3>Calendario de eventos</h3></header><p data-copy>Calendario restaurado</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Demo 12</button><button type="button" data-item="1" aria-pressed="false">Sync 16</button><button type="button" data-item="2" aria-pressed="false">Launch 23</button></div><strong data-output>Demo 12</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Añadir evento</button><button type="button" data-reset>Restaurar</button></div><span role="status">Calendario restaurado</span></section>
<script type="module">
import { mountEventCalendar } from '/assets/event-calendar.js';
document.querySelectorAll('[data-cxd-control="event-calendar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountEventCalendar(root); });
</script>
HTML; }
