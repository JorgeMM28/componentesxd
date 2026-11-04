<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderAgendaReservations(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="agenda-reservations"><h3>Agenda de reservas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Confirmar reserva</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Agenda restaurada</span></div>
<script type="module">
import { mountAgendaReservations } from '/assets/agenda-reservations.js';
document.querySelectorAll('[data-cxd-control="agenda-reservations"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAgendaReservations(root); });
</script>
HTML; }
