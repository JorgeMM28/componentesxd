<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class NeuralNetworkGraphPropagatorWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="neural-network-graph-propagator" wire:ignore><h3>Red neuronal</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ejecutar inferencia</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Red preparada</span>@script
<script>
import('/assets/neural-network-graph-propagator.js').then(module => module.mountNeuralNetworkGraphPropagator($wire.$el));
</script>
@endscript</div>
HTML; } }
