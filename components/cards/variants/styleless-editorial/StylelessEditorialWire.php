<?php
// Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — Laravel Livewire 3 (components/cards/variants/styleless-editorial/StylelessEditorialWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class StylelessEditorialWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-styleless-editorial">
            <h3>Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
