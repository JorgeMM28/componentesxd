<?php
// Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real — Laravel Livewire 3 (components/special-hybrids/variants/stepper-checkout-calculator/StepperCheckoutCalculatorWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class StepperCheckoutCalculatorWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-stepper-checkout-calculator">
            <h3>Variante 06 — Step-by-Step Configurador Cloud + Motor "Calculando..." en Tiempo Real</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
