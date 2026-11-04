<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class VerticalEventTimelineWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="vertical-event-timeline" wire:ignore><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div class="cxd-data__list" data-list aria-live="polite"><div class="cxd-data__item">Despliegue completado</div><div class="cxd-data__item">Archivos sincronizados</div></div>@script
<script>
import('/assets/vertical-event-timeline.js').then(module => module.mountVerticalEventTimeline($wire.$el));
</script>
@endscript</div>
HTML; } }
