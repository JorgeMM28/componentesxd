<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CalendarSlotMatrixWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="calendar-slot-Matrix" wire:ignore><label>Día <select data-day><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select></label><div class="cxd-widget__row"><button type="button" data-slot="09:00" aria-pressed="false">09:00</button><button type="button" data-slot="11:00" aria-pressed="false">11:00</button><button type="button" data-slot="15:00" aria-pressed="false">15:00</button></div><span role="status">Selecciona un horario</span>@script
<script>
import('/assets/calendar-slot-Matrix.js').then(module => module.mountCalendarSlotMatrix($wire.$el));
</script>
@endscript</div>
HTML; } }
