<?php
// Variante 02 — Botones Styleless (Subrayado Cinético sin Caja) — Laravel Livewire 3 (components/buttons/variants/styleless-text-links/StylelessTextLinksWire.php)
namespace App\Livewire\Cxd\Buttons;
use Livewire\Component;

class StylelessTextLinksWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-buttons-styleless-text-links">
            <h3>Variante 02 — Botones Styleless (Subrayado Cinético sin Caja)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
