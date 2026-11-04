<?php
// Variante 04 — Tarjeta Interactiva con Pestañas Internas — Laravel Livewire 3 (components/cards/variants/interactive-tabbed-card/InteractiveTabbedCardWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class InteractiveTabbedCardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-interactive-tabbed-card">
            <h3>Variante 04 — Tarjeta Interactiva con Pestañas Internas</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
