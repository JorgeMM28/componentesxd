<?php
// Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config — Laravel Livewire 3 (components/cards/variants/form-embedded-card/FormEmbeddedCardWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class FormEmbeddedCardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-form-embedded-card">
            <h3>Variante 06 — Tarjeta con Formulario Rápido de Cotización / Config</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
