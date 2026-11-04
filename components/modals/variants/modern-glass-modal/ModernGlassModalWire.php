<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ModernGlassModalWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="modern-glass-modal" wire:ignore><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div class="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog>@script
<script>
import('/assets/modern-glass-modal.js').then(module => module.mountModernGlassModal($wire.$el));
</script>
@endscript</div>
HTML; } }
