<?php
// Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista) — Laravel Livewire 3 (components/forms/variants/styleless-underline-inputs/StylelessUnderlineInputsWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class StylelessUnderlineInputsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-styleless-underline-inputs">
            <h3>Variante 02 — Inputs Styleless (Solo Línea Inferior Minimalista)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
