<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AgendaReservationsWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-agenda" data-cxd-control="agenda-reservations" wire:ignore><header><small>JUEVES 14 · ESTUDIO A</small><h3>Reservas disponibles</h3></header><div class="cxd-agenda__slots" data-slots><button type="button" data-slot="09:00">09:00</button><button type="button" data-slot="10:30">10:30</button><button type="button" data-slot="12:00">12:00</button><button type="button" data-slot="16:00">16:00</button></div><footer><strong data-selection>Sin reserva</strong><button type="button" data-book disabled>Confirmar reserva</button></footer><span role="status">Elige una franja disponible.</span></section>
HTML; } }
