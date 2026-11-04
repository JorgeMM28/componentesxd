<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveAsyncMorphWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="interactive-async-morph" wire:ignore><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span>@script
<script>
import('/assets/interactive-async-morph.js').then(module => module.mountInteractiveAsyncMorph($wire.$el));
</script>
@endscript</div>
HTML; } }
