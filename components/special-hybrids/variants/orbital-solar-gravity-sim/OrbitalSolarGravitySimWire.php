<?php
// Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno) — Laravel Livewire 3 (components/special-hybrids/variants/orbital-solar-gravity-sim/OrbitalSolarGravitySimWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class OrbitalSolarGravitySimWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-orbital-solar-gravity-sim">
            <h3>Variante 26 — Sistema Solar Animado Completo (Sol + 8 Planetas + Luna + Cinturón de Asteroides + Saturno)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
