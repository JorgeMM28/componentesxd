<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingRowsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-table cxd-table--floating" data-cxd-control="floating-rows" wire:ignore><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table>@script
<script>
import('/assets/floating-rows.js').then(module => module.mountFloatingRows($wire.$el));
</script>
@endscript</div>
HTML; } }
