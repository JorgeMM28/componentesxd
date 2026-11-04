<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class TableBulkExplosionWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="table-bulk-explosion" wire:ignore><h3>Selección masiva</h3><table><thead><tr><th>Seleccionar</th><th>Recurso</th><th>Estado</th></tr></thead><tbody data-rows></tbody></table><div class="cxd-special__actions"><button type="button" data-purge>Eliminar selección</button><button type="button" data-reset>Restaurar todo</button></div><span role="status"></span>@script
<script>
import('/assets/table-bulk-explosion.js').then(module => module.mountTableBulkExplosion($wire.$el));
</script>
@endscript</div>
HTML; } }
