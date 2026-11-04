<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SplitDropdownActionWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="split-dropdown-action" wire:ignore><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span>@script
<script>
import('/assets/split-dropdown-action.js').then(module => module.mountSplitDropdownAction($wire.$el));
</script>
@endscript</div>
HTML; } }
