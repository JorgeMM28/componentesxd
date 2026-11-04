<?php
// Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline — Laravel Livewire 3 (components/special-hybrids/variants/stepper-carousel-wizard/StepperCarouselWizardWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class StepperCarouselWizardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-stepper-carousel-wizard">
            <h3>Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
