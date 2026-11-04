<?php
// Variante 08 — Botón Mecánico 3D de Presión Física — Laravel Livewire 3 (components/buttons/variants/brutalist-3d-push/Brutalist3dPushWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class Brutalist3dPushWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-brutalist-3d-push">
            <h3>Variante 08 — Botón Mecánico 3D de Presión Física</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
