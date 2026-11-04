<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StylelessMinimalAlertWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" wire:ignore role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p>@script
<script>
import('/assets/styleless-minimal-alert.js').then(module => module.mountStylelessMinimalAlert($wire.$el));
</script>
@endscript</div>
HTML; } }
