<?php
// Variante 01 — Toaster Moderno Flotante con Barra de Tiempo — Laravel Livewire 3 (components/toasts/variants/modern-floating-toast/ModernFloatingToastWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class ModernFloatingToastWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-modern-floating-toast">
            <h3>Variante 01 — Toaster Moderno Flotante con Barra de Tiempo</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
