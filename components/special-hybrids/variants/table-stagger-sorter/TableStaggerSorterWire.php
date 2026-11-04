<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class TableStaggerSorterWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="table-stagger-sorter" wire:ignore><h3>Telemetría ordenable</h3><div class="cxd-special__actions"><label>Ordenar por <select data-sort><option value="name">Nombre</option><option value="latency">Latencia</option><option value="load">Carga</option></select></label><button type="button" data-direction>Orden ascendente</button></div><table><thead><tr><th>Nodo</th><th>Latencia</th><th>Carga</th></tr></thead><tbody data-rows><tr data-name="Alfa" data-latency="42" data-load="68"><td>Alfa</td><td>42 ms</td><td>68% <span class="cxd-special__bar" data-bar="68"></span></td></tr><tr data-name="Beta" data-latency="18" data-load="35"><td>Beta</td><td>18 ms</td><td>35% <span class="cxd-special__bar" data-bar="35"></span></td></tr><tr data-name="Gamma" data-latency="76" data-load="91"><td>Gamma</td><td>76 ms</td><td>91% <span class="cxd-special__bar" data-bar="91"></span></td></tr></tbody></table><span role="status"></span>@script
<script>
import('/assets/table-stagger-sorter.js').then(module => module.mountTableStaggerSorter($wire.$el));
</script>
@endscript</div>
HTML; } }
