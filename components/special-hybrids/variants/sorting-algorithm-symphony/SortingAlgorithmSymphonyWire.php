<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SortingAlgorithmSymphonyWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="sorting-algorithm-symphony" wire:ignore><header><small>SINFONÍA DE ORDENAMIENTO</small><h3>Sinfonía de ordenamiento</h3></header><p data-copy>Valores mezclados</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">QuickSort</button><button type="button" data-item="1" aria-pressed="false">BubbleSort</button><button type="button" data-item="2" aria-pressed="false">Insertion</button></div><strong data-output>QuickSort</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ordenar columnas</button><button type="button" data-reset>Restaurar</button></div><span role="status">Valores mezclados</span></section>
HTML; } }
