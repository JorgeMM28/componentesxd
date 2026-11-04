<?php
// Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante — Laravel Livewire 3 (components/badges-data/variants/modern-pulse-badges/ModernPulseBadgesWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class ModernPulseBadgesWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-modern-pulse-badges">
            <h3>Variante 01 — Colección de Badges Modernos, Outline y Con Punto Pulsante</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
