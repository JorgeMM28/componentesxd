<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class Isometric3dCityClusterWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="isometric-3d-city-cluster" wire:ignore><header><small>CLÚSTER ISOMÉTRICO</small><h3>Clúster isométrico</h3></header><p data-copy>Clúster restaurado</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Nodo 01</button><button type="button" data-item="1" aria-pressed="false">Nodo 08</button><button type="button" data-item="2" aria-pressed="false">Nodo 16</button></div><strong data-output>Nodo 01</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Distribuir carga</button><button type="button" data-reset>Restaurar</button></div><span role="status">Clúster restaurado</span></section>
HTML; } }
