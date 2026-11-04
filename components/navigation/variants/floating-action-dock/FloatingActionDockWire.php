<?php
// Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — Laravel Livewire 3 (components/navigation/variants/floating-action-dock/FloatingActionDockWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class FloatingActionDockWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-floating-action-dock">
            <h3>Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
