<?php
// Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — Laravel Livewire 3 (components/navigation/variants/floating-pill-navbar/FloatingPillNavbarWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class FloatingPillNavbarWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-floating-pill-navbar">
            <h3>Variante 02 — Navbar Flotante Redondeada Tipo Cápsula</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
