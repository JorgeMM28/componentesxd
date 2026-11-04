<?php
// Variante 02 — Tabla Styleless (Sin Bordes / Editorial) — Laravel Livewire 3 (components/tables/variants/styleless-minimal/StylelessMinimalWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class StylelessMinimalWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-styleless-minimal">
            <h3>Variante 02 — Tabla Styleless (Sin Bordes / Editorial)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
