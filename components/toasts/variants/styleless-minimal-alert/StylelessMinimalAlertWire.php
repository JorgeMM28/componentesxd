<?php
// Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — Laravel Livewire 3 (components/toasts/variants/styleless-minimal-alert/StylelessMinimalAlertWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class StylelessMinimalAlertWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-styleless-minimal-alert">
            <h3>Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
