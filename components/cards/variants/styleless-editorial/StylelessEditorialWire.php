<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StylelessEditorialWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card cxd-card--editorial" data-cxd-control="styleless-editorial" wire:ignore><span>ENSAYO ARQUITECTÓNICO // Nº 04</span><h3>La eliminación del contenedor innecesario</h3><p>La jerarquía tipográfica y el espacio definen el bloque.</p><button type="button" data-read>Leer especificación</button><span role="status">Listo para explorar</span>@script
<script>
import('/assets/styleless-editorial.js').then(module => module.mountStylelessEditorial($wire.$el));
</script>
@endscript</div>
HTML; } }
