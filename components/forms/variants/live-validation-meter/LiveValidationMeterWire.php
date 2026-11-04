<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class LiveValidationMeterWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="live-validation-meter" wire:ignore><label>Contraseña <input type="password" data-password autocomplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span>@script
<script>
import('/assets/live-validation-meter.js').then(module => module.mountLiveValidationMeter($wire.$el));
</script>
@endscript</div>
HTML; } }
