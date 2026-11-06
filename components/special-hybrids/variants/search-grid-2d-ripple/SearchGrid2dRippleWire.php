<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SearchGrid2dRippleWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--config" data-cxd-control="search-grid-2d-ripple" wire:ignore><header><small>BUSCADOR DE NODOS</small><h3>Buscador de nodos</h3></header><p data-copy>Matriz restaurada</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">N-1</button><button type="button" data-item="1" aria-pressed="false">N-2</button><button type="button" data-item="2" aria-pressed="false">N-3</button></div><strong data-output>N-1</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Propagar onda</button><button type="button" data-reset>Restaurar</button></div><span role="status">Matriz restaurada</span></section>
HTML; } }
