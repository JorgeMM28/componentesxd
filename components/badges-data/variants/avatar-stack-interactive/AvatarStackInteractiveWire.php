<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AvatarStackInteractiveWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="avatar-stack-interactive" wire:ignore><button type="button" class="cxd-data__avatar" data-name="Elena Rostova" data-role="Arquitectura UI" aria-pressed="true">ER</button><button type="button" class="cxd-data__avatar" data-name="Marco Kovacs" data-role="Ingeniería de sistemas" aria-pressed="false">MK</button><button type="button" class="cxd-data__avatar" data-name="Sofía Vance" data-role="Diseño de movimiento" aria-pressed="false">SV</button><span role="status">Elena Rostova · Arquitectura UI</span>@script
<script>
import('/assets/avatar-stack-interactive.js').then(module => module.mountAvatarStackInteractive($wire.$el));
</script>
@endscript</div>
HTML; } }
