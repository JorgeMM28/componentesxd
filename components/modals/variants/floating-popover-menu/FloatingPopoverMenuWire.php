<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingPopoverMenuWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="floating-popover-menu" wire:ignore><button type="button" data-trigger aria-expanded="false">Abrir menú contextual</button><div class="cxd-dialog__popover" data-popover hidden><div class="cxd-dialog__list"><button type="button" data-action="Editar">Editar</button><button type="button" data-action="Duplicar">Duplicar</button><button type="button" data-action="Archivar">Archivar</button></div></div><span role="status">Ninguna acción</span>@script
<script>
import('/assets/floating-popover-menu.js').then(module => module.mountFloatingPopoverMenu($wire.$el));
</script>
@endscript</div>
HTML; } }
