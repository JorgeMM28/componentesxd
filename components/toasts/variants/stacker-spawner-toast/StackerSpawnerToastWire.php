<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StackerSpawnerToastWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="stacker-spawner-toast" wire:ignore><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div class="cxd-toast__list" data-list aria-live="polite"></div>@script
<script>
import('/assets/stacker-spawner-toast.js').then(module => module.mountStackerSpawnerToast($wire.$el));
</script>
@endscript</div>
HTML; } }
