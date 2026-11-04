<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ModernRoundedFormWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="modern-rounded-form" wire:ignore><form data-form><label>Correo electrónico <input type="email" data-email required value="arquitectura@componentesxd.dev" /></label><button type="submit">Guardar</button></form><span role="status">Listo para guardar</span>@script
<script>
import('/assets/modern-rounded-form.js').then(module => module.mountModernRoundedForm($wire.$el));
</script>
@endscript</div>
HTML; } }
