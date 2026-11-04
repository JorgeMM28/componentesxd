<?php
// Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — Laravel Livewire 3 (components/cards/variants/modern-rounded-bento/ModernRoundedBentoWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class ModernRoundedBentoWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-modern-rounded-bento">
            <h3>Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
