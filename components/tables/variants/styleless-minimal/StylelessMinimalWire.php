<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StylelessMinimalWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-table cxd-table--minimal" data-cxd-control="styleless-minimal" wire:ignore><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table>@script
<script>
import('/assets/styleless-minimal.js').then(module => module.mountStylelessMinimal($wire.$el));
</script>
@endscript</div>
HTML; } }
