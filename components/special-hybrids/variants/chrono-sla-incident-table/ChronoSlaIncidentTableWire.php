<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ChronoSlaIncidentTableWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="chrono-sla-incident-table" wire:ignore><header><small>INCIDENTES SLA</small><h3>Incidentes SLA</h3></header><p data-copy>Incidente reabierto</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">INC-904</button><button type="button" data-item="1" aria-pressed="false">INC-905</button><button type="button" data-item="2" aria-pressed="false">INC-906</button></div><strong data-output>INC-904</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Resolver incidente</button><button type="button" data-reset>Restaurar</button></div><span role="status">Incidente reabierto</span></section>
HTML; } }
