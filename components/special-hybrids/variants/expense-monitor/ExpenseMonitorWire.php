<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ExpenseMonitorWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-expenses" data-cxd-control="expense-monitor" wire:ignore><header><small>PRESUPUESTO · OCT</small><h3>Monitor de gastos</h3></header><div data-expenses><label>Infraestructura <input type="number" min="0" value="7200" /></label><label>Marketing <input type="number" min="0" value="3100" /></label><label>Operación <input type="number" min="0" value="2180" /></label></div><footer><strong data-total></strong><output data-remaining></output></footer><span role="status"></span></section>
HTML; } }
