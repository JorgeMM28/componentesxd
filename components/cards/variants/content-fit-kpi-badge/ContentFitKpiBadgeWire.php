<?php
// Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — Laravel Livewire 3 (components/cards/variants/content-fit-kpi-badge/ContentFitKpiBadgeWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class ContentFitKpiBadgeWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-content-fit-kpi-badge">
            <h3>Variante 07 — Tarjeta Content-Fit Compacta de Telemetría</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
