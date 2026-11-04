<?php
// Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir — Laravel Livewire 3 (components/special-hybrids/variants/accordion-animated-metrics/AccordionAnimatedMetricsWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class AccordionAnimatedMetricsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-accordion-animated-metrics">
            <h3>Variante 18 — Acordeón Técnico + Telemetría que Anima de 0% a 100% al Expandir</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
