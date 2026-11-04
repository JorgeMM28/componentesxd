<?php
// Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos — Laravel Livewire 3 (components/navigation/variants/compact-navigation-rail/CompactNavigationRailWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class CompactNavigationRailWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <nav class="cxd-navigation-compact-navigation-rail">
            <h3>Variante 09 — Navigation Rail Ultra-Compacto con Tooltips y Puntos Activos</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </nav>
        HTML;
    }
}
