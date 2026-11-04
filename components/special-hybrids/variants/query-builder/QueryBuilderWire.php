<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class QueryBuilderWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="query-builder" wire:ignore><h3>Constructor de consultas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ejecutar consulta</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Consulta restaurada</span>@script
<script>
import('/assets/query-builder.js').then(module => module.mountQueryBuilder($wire.$el));
</script>
@endscript</div>
HTML; } }
