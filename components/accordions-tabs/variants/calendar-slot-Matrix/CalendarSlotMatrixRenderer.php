<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCalendarSlotMatrix(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="calendar-slot-Matrix"><label>Día <select data-day><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select></label><div class="cxd-widget__row"><button type="button" data-slot="09:00" aria-pressed="false">09:00</button><button type="button" data-slot="11:00" aria-pressed="false">11:00</button><button type="button" data-slot="15:00" aria-pressed="false">15:00</button></div><span role="status">Selecciona un horario</span></div>
<script type="module">
import { mountCalendarSlotMatrix } from '/assets/calendar-slot-Matrix.js';
document.querySelectorAll('[data-cxd-control="calendar-slot-Matrix"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCalendarSlotMatrix(root); });
</script>
HTML; }
