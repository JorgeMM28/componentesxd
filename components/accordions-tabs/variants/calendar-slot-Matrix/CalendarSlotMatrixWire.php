<?php
// Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos — Laravel Livewire 3 (components/accordions-tabs/variants/calendar-slot-Matrix/CalendarSlotMatrixWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class CalendarSlotMatrixWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-calendar-slot-Matrix">
            <h3>Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
