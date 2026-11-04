<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InventoryBoardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="inventory-board" wire:ignore><h3>Tablero de inventario</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Reabastecer ítem</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Inventario restaurado</span>@script
<script>
import('/assets/inventory-board.js').then(module => module.mountInventoryBoard($wire.$el));
</script>
@endscript</div>
HTML; } }
