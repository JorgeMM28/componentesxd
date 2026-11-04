<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ExpandableDetailWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-table" data-cxd-control="expandable-detail" wire:ignore><table><thead><tr><th>Incidente</th><th>Estado</th></tr></thead><tbody><tr><td><button type="button" data-expand="one" aria-expanded="false">INC-4091 · Latencia</button></td><td>SEV-2</td></tr><tr data-detail="one" hidden><td>Tráfico normalizado al 100%.</td><td>Resuelto</td></tr><tr><td><button type="button" data-expand="two" aria-expanded="false">DEP-8820 · Actualización</button></td><td>Completado</td></tr><tr data-detail="two" hidden><td>24 nodos reiniciados.</td><td>Sin pérdida</td></tr></tbody></table>@script
<script>
import('/assets/expandable-detail.js').then(module => module.mountExpandableDetail($wire.$el));
</script>
@endscript</div>
HTML; } }
