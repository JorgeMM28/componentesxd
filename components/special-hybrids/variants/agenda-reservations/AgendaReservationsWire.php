<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AgendaReservationsWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="agenda-reservations" wire:ignore><header><small>AGENDA DE RESERVAS</small><h3>Agenda de reservas</h3></header><p data-copy>Agenda restaurada</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">09:00</button><button type="button" data-item="1" aria-pressed="false">10:30</button><button type="button" data-item="2" aria-pressed="false">16:00</button></div><strong data-output>09:00</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Confirmar reserva</button><button type="button" data-reset>Restaurar</button></div><span role="status">Agenda restaurada</span></section>
HTML; } }
