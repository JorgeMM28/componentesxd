<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveSortSelectWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-table" data-cxd-control="interactive-sort-select" wire:ignore><table><thead><tr><th><label>Todo <input type="checkbox" data-all /></label></th><th aria-sort="none" data-heading><button type="button" data-sort>Miembro ↕</button></th><th>Departamento</th></tr></thead><tbody data-body><tr><td><input type="checkbox" data-check aria-label="Seleccionar Elena" /></td><td>Elena</td><td>Arquitectura</td></tr><tr><td><input type="checkbox" data-check aria-label="Seleccionar Marco" /></td><td>Marco</td><td>Sistemas</td></tr><tr><td><input type="checkbox" data-check aria-label="Seleccionar Sofía" /></td><td>Sofía</td><td>Diseño</td></tr></tbody></table><button type="button" data-clear>Limpiar selección</button><span role="status">0 de 3 filas seleccionadas</span>@script
<script>
import('/assets/interactive-sort-select.js').then(module => module.mountInteractiveSortSelect($wire.$el));
</script>
@endscript</div>
HTML; } }
