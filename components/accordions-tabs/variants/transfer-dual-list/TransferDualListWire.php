<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class TransferDualListWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="transfer-dual-list" wire:ignore><div class="cxd-widget__columns"><div class="cxd-widget__list" data-available><strong>Disponibles</strong><div data-item><span>WAF</span> <button type="button" data-transfer>Activar →</button></div><div data-item><span>Caché</span> <button type="button" data-transfer>Activar →</button></div></div><div class="cxd-widget__list" data-active><strong>Activos</strong></div></div><span role="status">Selecciona un módulo</span>@script
<script>
import('/assets/transfer-dual-list.js').then(module => module.mountTransferDualList($wire.$el));
</script>
@endscript</div>
HTML; } }
