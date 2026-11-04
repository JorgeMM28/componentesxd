<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class Isometric3dCityClusterWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="isometric-3d-city-cluster" wire:ignore><h3>Clúster isométrico</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Distribuir carga</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Clúster restaurado</span>@script
<script>
import('/assets/isometric-3d-city-cluster.js').then(module => module.mountIsometric3dCityCluster($wire.$el));
</script>
@endscript</div>
HTML; } }
