<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CrudActionsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-table" data-cxd-control="crud-actions" wire:ignore><button type="button" data-add>Agregar registro</button><table><thead><tr><th>Servicio</th><th>Estado</th><th>Acciones</th></tr></thead><tbody data-body><tr><td data-name>API</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr><tr><td data-name>Worker</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr></tbody></table><span role="status">2 registros</span>@script
<script>
import('/assets/crud-actions.js').then(module => module.mountCrudActions($wire.$el));
</script>
@endscript</div>
HTML; } }
