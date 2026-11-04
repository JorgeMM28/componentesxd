<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StylelessUnderlineInputsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs" wire:ignore><label>Título del documento <input type="text" data-input value="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span>@script
<script>
import('/assets/styleless-underline-inputs.js').then(module => module.mountStylelessUnderlineInputs($wire.$el));
</script>
@endscript</div>
HTML; } }
