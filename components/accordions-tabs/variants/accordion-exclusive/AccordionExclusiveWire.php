<?php
// Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura — Laravel Livewire 3 (components/accordions-tabs/variants/accordion-exclusive/AccordionExclusiveWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class AccordionExclusiveWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-accordion-exclusive">
            <h3>Variante 01 — Acordeón Exclusivo (Single-Open) con Animación de Altura</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
