<?php
// Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — Laravel Livewire 3 (components/carousels/variants/card-deck-throw/CardDeckThrowWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class CardDeckThrowWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-card-deck-throw">
            <h3>Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
