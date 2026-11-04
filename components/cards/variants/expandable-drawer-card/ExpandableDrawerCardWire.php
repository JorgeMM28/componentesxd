<?php
// Variante 08 — Tarjeta con Despliegue de Detalles Técnicos — Laravel Livewire 3 (components/cards/variants/expandable-drawer-card/ExpandableDrawerCardWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class ExpandableDrawerCardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-expandable-drawer-card">
            <h3>Variante 08 — Tarjeta con Despliegue de Detalles Técnicos</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
