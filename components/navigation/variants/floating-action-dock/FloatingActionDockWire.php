<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingActionDockWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock" wire:ignore><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span>@script
<script>
import('/assets/floating-action-dock.js').then(module => module.mountFloatingActionDock($wire.$el));
</script>
@endscript</div>
HTML; } }
