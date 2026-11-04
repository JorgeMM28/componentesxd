<?php
// Variante 01 — Tabla Moderna de Bordes Redondeados — Laravel Livewire 3 (components/tables/variants/modern-rounded/ModernRoundedWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class ModernRoundedWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-modern-rounded">
            <h3>Variante 01 — Tabla Moderna de Bordes Redondeados</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
