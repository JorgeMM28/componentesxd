<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ChartEditorWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--config" data-cxd-control="chart-editor" wire:ignore><header><small>EDITOR DE GRÁFICOS</small><h3>Editor de gráficos</h3></header><p data-copy>Gráfico restaurado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Columnas</button><button type="button" data-item="1" aria-pressed="false">Líneas</button><button type="button" data-item="2" aria-pressed="false">Área</button></div><strong data-output>Columnas</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Cambiar visual</button><button type="button" data-reset>Restaurar</button></div><span role="status">Gráfico restaurado</span></section>
HTML; } }
