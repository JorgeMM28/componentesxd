<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class DynamicIslandMorphWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph" wire:ignore><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span>@script
<script>
import('/assets/dynamic-island-morph.js').then(module => module.mountDynamicIslandMorph($wire.$el));
</script>
@endscript</div>
HTML; } }
