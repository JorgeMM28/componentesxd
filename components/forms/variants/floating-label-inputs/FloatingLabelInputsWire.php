<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingLabelInputsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="floating-label-inputs" wire:ignore><label class="cxd-form__float"><span>Nombre del cluster</span><input type="text" data-input value="us-east-production-01" /></label><span role="status">Etiqueta flotante</span>@script
<script>
import('/assets/floating-label-inputs.js').then(module => module.mountFloatingLabelInputs($wire.$el));
</script>
@endscript</div>
HTML; } }
