<?php
// Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft) — Laravel Livewire 3 (components/navigation/variants/microsoft-cascade-nav/MicrosoftCascadeNavWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class MicrosoftCascadeNavWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-microsoft-cascade-nav">
            <h3>Variante 01 — Navbar con Menú en Cascada Multi-Nivel (Estilo Microsoft)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
