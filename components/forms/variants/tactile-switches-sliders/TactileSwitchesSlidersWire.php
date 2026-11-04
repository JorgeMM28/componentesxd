<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class TactileSwitchesSlidersWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="tactile-switches-sliders" wire:ignore><label><input type="checkbox" checked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span>@script
<script>
import('/assets/tactile-switches-sliders.js').then(module => module.mountTactileSwitchesSliders($wire.$el));
</script>
@endscript</div>
HTML; } }
