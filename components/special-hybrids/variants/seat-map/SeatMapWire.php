<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SeatMapWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="seat-map" wire:ignore><header><small>MAPA DE ASIENTOS</small><h3>Mapa de asientos</h3></header><p data-copy>Mapa restaurado</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">A1</button><button type="button" data-item="1" aria-pressed="false">A2</button><button type="button" data-item="2" aria-pressed="false">B2</button></div><strong data-output>A1</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Reservar asiento</button><button type="button" data-reset>Restaurar</button></div><span role="status">Mapa restaurado</span></section>
HTML; } }
