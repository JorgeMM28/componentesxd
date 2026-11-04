<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class HoldConfirmSafetyWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="hold-confirm-safety" wire:ignore><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span>@script
<script>
import('/assets/hold-confirm-safety.js').then(module => module.mountHoldConfirmSafety($wire.$el));
</script>
@endscript</div>
HTML; } }
