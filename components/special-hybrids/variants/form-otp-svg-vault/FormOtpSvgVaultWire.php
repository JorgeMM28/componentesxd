<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FormOtpSvgVaultWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--config" data-cxd-control="form-otp-svg-vault" wire:ignore><header><small>BÓVEDA OTP</small><h3>Bóveda OTP</h3></header><p data-copy>Esperando código</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Código 9248</button><button type="button" data-item="1" aria-pressed="false">Escudo</button><button type="button" data-item="2" aria-pressed="false">Acceso</button></div><strong data-output>Código 9248</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Validar código</button><button type="button" data-reset>Restaurar</button></div><span role="status">Esperando código</span></section>
HTML; } }
