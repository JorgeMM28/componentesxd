<?php
// Variante 06 — Botón con Menú de Acciones (Split Dropdown) — Laravel Livewire 3 (components/buttons/variants/split-dropdown-action/SplitDropdownActionWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class SplitDropdownActionWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-split-dropdown-action">
            <h3>Variante 06 — Botón con Menú de Acciones (Split Dropdown)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
