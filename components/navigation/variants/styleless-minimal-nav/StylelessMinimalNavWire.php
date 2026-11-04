<?php
// Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante — Laravel Livewire 3 (components/navigation/variants/styleless-minimal-nav/StylelessMinimalNavWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class StylelessMinimalNavWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-styleless-minimal-nav">
            <h3>Variante 03 — Navegación Styleless Minimalista con Indicador Deslizante</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
