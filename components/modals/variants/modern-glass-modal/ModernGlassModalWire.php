<?php
// Variante 01 — Modal Moderno con Bordes Redondeados y Blur — Laravel Livewire 3 (components/modals/variants/modern-glass-modal/ModernGlassModalWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class ModernGlassModalWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-modern-glass-modal">
            <h3>Variante 01 — Modal Moderno con Bordes Redondeados y Blur</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
