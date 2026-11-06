<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AudioSynthSpectrumAnalyzerWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="audio-synth-spectrum-analyzer" wire:ignore><header><small>ANALIZADOR DE ESPECTRO</small><h3>Analizador de espectro</h3></header><p data-copy>Perfil base</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Cyberpunk</button><button type="button" data-item="1" aria-pressed="false">Sub-Bass</button><button type="button" data-item="2" aria-pressed="false">Harmonics</button></div><strong data-output>Cyberpunk</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Cambiar perfil</button><button type="button" data-reset>Restaurar</button></div><span role="status">Perfil base</span></section>
HTML; } }
