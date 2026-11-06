<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ChartEditorWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-chart" data-cxd-control="chart-editor" wire:ignore><header><small>INGRESOS</small><h3>Editor de gráfico</h3><select data-chart-type><option value="bars">Barras</option><option value="line">Línea</option></select></header><div class="cxd-chart__canvas" data-chart><i style="--height:42%"></i><i style="--height:78%"></i><i style="--height:56%"></i><i style="--height:91%"></i></div><button type="button" data-random>Generar datos</button><span role="status">Visualización de barras.</span></section>
HTML; } }
