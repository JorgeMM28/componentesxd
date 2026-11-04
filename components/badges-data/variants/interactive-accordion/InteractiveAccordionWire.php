<?php
// Variante 02 — Acordeón Interactivo Multi-Sección — Laravel Livewire 3 (components/badges-data/variants/interactive-accordion/InteractiveAccordionWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class InteractiveAccordionWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-interactive-accordion">
            <h3>Variante 02 — Acordeón Interactivo Multi-Sección</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
