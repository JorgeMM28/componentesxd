<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveOtpPinWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="interactive-otp-pin" wire:ignore><div class="cxd-form__otp"><input inputmode="numeric" maxlength="1" aria-label="Dígito 1" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 2" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 3" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 4" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 5" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 6" /></div><button type="button" data-generate>Generar código</button><span role="status">Introduce 6 dígitos</span>@script
<script>
import('/assets/interactive-otp-pin.js').then(module => module.mountInteractiveOtpPin($wire.$el));
</script>
@endscript</div>
HTML; } }
