<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class BeforeAfterSplitWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="before-after-split" wire:ignore><div class="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" value="50" data-range /></label><span role="status">50%</span>@script
<script>
import('/assets/before-after-split.js').then(module => module.mountBeforeAfterSplit($wire.$el));
</script>
@endscript</div>
HTML; } }
