<?php
// Variante 06 — Panel Inspector Lateral (Drawer de Detalles) — Laravel Livewire 3 (components/modals/variants/slide-drawer-inspector/SlideDrawerInspectorWire.php)
namespace App\Livewire\Cxd\Modals;
use Livewire\Component;

class SlideDrawerInspectorWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-modals-slide-drawer-inspector">
            <h3>Variante 06 — Panel Inspector Lateral (Drawer de Detalles)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
