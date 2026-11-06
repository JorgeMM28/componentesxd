<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CyberRadarThreatSonarWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--config" data-cxd-control="cyber-radar-threat-sonar" wire:ignore><header><small>RADAR TÁCTICO</small><h3>Radar táctico</h3></header><p data-copy>Barrido reiniciado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Contacto A</button><button type="button" data-item="1" aria-pressed="false">Contacto B</button><button type="button" data-item="2" aria-pressed="false">Contacto C</button></div><strong data-output>Contacto A</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Interceptar objetivo</button><button type="button" data-reset>Restaurar</button></div><span role="status">Barrido reiniciado</span></section>
HTML; } }
