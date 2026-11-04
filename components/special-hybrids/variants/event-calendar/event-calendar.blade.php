{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="event-calendar"><h3>Calendario de eventos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Añadir evento</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Calendario restaurado</span></div>
<script type="module">
import { mountEventCalendar } from '/assets/event-calendar.js';
document.querySelectorAll('[data-cxd-control="event-calendar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountEventCalendar(root); });
</script>
