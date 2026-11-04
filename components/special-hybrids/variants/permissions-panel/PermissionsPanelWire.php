<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class PermissionsPanelWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="permissions-panel" wire:ignore><h3>Panel de permisos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Aplicar permiso</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Permisos restaurados</span>@script
<script>
import('/assets/permissions-panel.js').then(module => module.mountPermissionsPanel($wire.$el));
</script>
@endscript</div>
HTML; } }
