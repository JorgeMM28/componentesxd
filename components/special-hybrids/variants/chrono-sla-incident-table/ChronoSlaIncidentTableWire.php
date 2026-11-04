<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ChronoSlaIncidentTableWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="chrono-sla-incident-table" wire:ignore><h3>Incidentes SLA</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Resolver incidente</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Incidente reabierto</span>@script
<script>
import('/assets/chrono-sla-incident-table.js').then(module => module.mountChronoSlaIncidentTable($wire.$el));
</script>
@endscript</div>
HTML; } }
