<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FormCreationModalWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="form-creation-modal" wire:ignore><button type="button" data-open>Crear instancia</button><span role="status">Listo</span><dialog aria-label="Crear instancia"><h3>Crear instancia</h3><form data-form><label>Nombre <input type="text" data-name required value="edge-analytics" /></label><label>Región <select data-region><option>us-east-1</option><option>eu-central-1</option><option>ap-northeast-1</option></select></label><div class="cxd-dialog__actions"><button type="submit">Crear</button><button type="button" data-close>Cancelar</button></div></form></dialog>@script
<script>
import('/assets/form-creation-modal.js').then(module => module.mountFormCreationModal($wire.$el));
</script>
@endscript</div>
HTML; } }
