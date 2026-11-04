<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingFabRadialWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="floating-fab-radial" wire:ignore><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div>@script
<script>
import('/assets/floating-fab-radial.js').then(module => module.mountFloatingFabRadial($wire.$el));
</script>
@endscript</div>
HTML; } }
