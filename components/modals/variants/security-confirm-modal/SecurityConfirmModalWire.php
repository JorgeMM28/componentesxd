<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SecurityConfirmModalWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="security-confirm-modal" wire:ignore><button type="button" data-open>Eliminar recurso</button><span role="status">Sin cambios</span><dialog aria-label="Confirmar eliminación"><h3>Confirmar eliminación</h3><p>Escribe ELIMINAR para habilitar la acción de demostración.</p><label>Confirmación <input type="text" data-confirm-input autocomplete="off" /></label><div class="cxd-dialog__actions"><button type="button" data-delete disabled>Eliminar</button><button type="button" data-close>Cancelar</button></div></dialog>@script
<script>
import('/assets/security-confirm-modal.js').then(module => module.mountSecurityConfirmModal($wire.$el));
</script>
@endscript</div>
HTML; } }
