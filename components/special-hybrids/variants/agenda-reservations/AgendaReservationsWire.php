<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AgendaReservationsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="agenda-reservations" wire:ignore><h3>Agenda de reservas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Confirmar reserva</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Agenda restaurada</span>@script
<script>
import('/assets/agenda-reservations.js').then(module => module.mountAgendaReservations($wire.$el));
</script>
@endscript</div>
HTML; } }
