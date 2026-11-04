<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ActionButtonsToastWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="action-buttons-toast" wire:ignore><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button>@script
<script>
import('/assets/action-buttons-toast.js').then(module => module.mountActionButtonsToast($wire.$el));
</script>
@endscript</div>
HTML; } }
