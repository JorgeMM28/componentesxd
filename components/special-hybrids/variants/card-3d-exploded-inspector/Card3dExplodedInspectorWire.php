<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class Card3dExplodedInspectorWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="card-3d-exploded-inspector" wire:ignore><h3>Inspector de capas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Separar capas</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Tarjeta ensamblada</span>@script
<script>
import('/assets/card-3d-exploded-inspector.js').then(module => module.mountCard3dExplodedInspector($wire.$el));
</script>
@endscript</div>
HTML; } }
