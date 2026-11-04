<?php
// Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel) — Laravel Livewire 3 (components/tables/variants/expandable-detail/ExpandableDetailWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class ExpandableDetailWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-expandable-detail">
            <h3>Variante 09 — Tabla Expandible Master-Detail (Despliegue de Sub-Panel)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
