<?php
// Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado — Laravel Livewire 3 (components/accordions-tabs/variants/segmented-pricing-toggle/SegmentedPricingToggleWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class SegmentedPricingToggleWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-segmented-pricing-toggle">
            <h3>Variante 05 — Conmutador de Planes Mensual / Anual con Recálculo Animado</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
