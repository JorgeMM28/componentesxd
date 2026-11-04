<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class PathfindingDijkstraVisualizerWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="pathfinding-dijkstra-visualizer" wire:ignore><h3>Explorador de rutas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Buscar ruta</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Laberinto restaurado</span>@script
<script>
import('/assets/pathfinding-dijkstra-visualizer.js').then(module => module.mountPathfindingDijkstraVisualizer($wire.$el));
</script>
@endscript</div>
HTML; } }
