<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class PathfindingDijkstraVisualizerWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="pathfinding-dijkstra-visualizer" wire:ignore><header><small>EXPLORADOR DE RUTAS</small><h3>Explorador de rutas</h3></header><p data-copy>Laberinto restaurado</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Inicio</button><button type="button" data-item="1" aria-pressed="false">Ruta</button><button type="button" data-item="2" aria-pressed="false">Salida</button></div><strong data-output>Inicio</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Buscar ruta</button><button type="button" data-reset>Restaurar</button></div><span role="status">Laberinto restaurado</span></section>
HTML; } }
