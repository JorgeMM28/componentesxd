<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FormOtpSvgVaultWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="form-otp-svg-vault" wire:ignore><h3>Bóveda OTP</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Validar código</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Esperando código</span>@script
<script>
import('/assets/form-otp-svg-vault.js').then(module => module.mountFormOtpSvgVault($wire.$el));
</script>
@endscript</div>
HTML; } }
