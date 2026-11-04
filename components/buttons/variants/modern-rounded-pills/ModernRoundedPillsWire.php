<?php
// Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — Laravel Livewire 3 (components/buttons/variants/modern-rounded-pills/ModernRoundedPillsWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class ModernRoundedPillsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-modern-rounded-pills">
            <h3>Variante 01 — Botones Modernos Redondeados (Píldora & Glow)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
