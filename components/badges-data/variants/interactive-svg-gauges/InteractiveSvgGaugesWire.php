<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveSvgGaugesWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="interactive-svg-gauges" wire:ignore><div class="cxd-data__gauge" data-gauge><strong data-value>84%</strong></div><label>Ajustar porcentaje <input type="range" min="0" max="100" value="84" data-slider /></label><button type="button" data-set="45">45%</button><button type="button" data-set="78">78%</button><button type="button" data-set="99">99%</button><span role="status">SLA global: 84%</span>@script
<script>
import('/assets/interactive-svg-gauges.js').then(module => module.mountInteractiveSvgGauges($wire.$el));
</script>
@endscript</div>
HTML; } }
