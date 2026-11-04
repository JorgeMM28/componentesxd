<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class Floating3dTiltWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="floating-3d-tilt" wire:ignore><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p>@script
<script>
import('/assets/floating-3d-tilt.js').then(module => module.mountFloating3dTilt($wire.$el));
</script>
@endscript</div>
HTML; } }
