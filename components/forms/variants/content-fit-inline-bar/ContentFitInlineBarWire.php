<?php
// Variante 03 — Formulario Content-Fit en Una Sola Línea — Laravel Livewire 3 (components/forms/variants/content-fit-inline-bar/ContentFitInlineBarWire.php)
namespace App\Livewire\Cxd\Forms;
use Livewire\Component;

class ContentFitInlineBarWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-forms-content-fit-inline-bar">
            <h3>Variante 03 — Formulario Content-Fit en Una Sola Línea</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
