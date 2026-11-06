<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class GitBranchCommitVisualizerWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--stages" data-cxd-control="git-branch-commit-visualizer" wire:ignore><header><small>GRAFO DE RAMAS</small><h3>Grafo de ramas</h3></header><p data-copy>Rama restaurada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">main</button><button type="button" data-item="1" aria-pressed="false">develop</button><button type="button" data-item="2" aria-pressed="false">feat/anime</button></div><strong data-output>main</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Crear commit</button><button type="button" data-reset>Restaurar</button></div><span role="status">Rama restaurada</span></section>
HTML; } }
