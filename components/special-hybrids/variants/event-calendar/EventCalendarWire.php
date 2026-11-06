<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class EventCalendarWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-calendar" data-cxd-control="event-calendar" wire:ignore><header><small>OCTUBRE 2026</small><h3 data-event-title>Calendario editorial</h3></header><div data-days><button type="button" data-event="Demo de producto">12<span>Demo</span></button><button type="button" data-event="Sync de diseño">16<span>Sync</span></button><button type="button" data-event="Lanzamiento">23<span>Launch</span></button></div><div class="cxd-special__actions"><button type="button" data-add>Crear evento</button><button type="button" data-clear>Limpiar selección</button></div><span role="status">Tres fechas destacadas.</span></section>
HTML; } }
