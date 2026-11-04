<?php
// Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — Laravel Livewire 3 (components/accordions-tabs/variants/accordion-multi-bento/AccordionMultiBentoWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class AccordionMultiBentoWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-accordion-multi-bento">
            <h3>Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
