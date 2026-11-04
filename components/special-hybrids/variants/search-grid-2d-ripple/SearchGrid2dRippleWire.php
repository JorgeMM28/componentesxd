<?php
// Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid) — Laravel Livewire 3 (components/special-hybrids/variants/search-grid-2d-ripple/SearchGrid2dRippleWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class SearchGrid2dRippleWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-search-grid-2d-ripple">
            <h3>Variante 14 — Buscador de Nodos + Matriz 2D con Onda Radial (stagger grid)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
