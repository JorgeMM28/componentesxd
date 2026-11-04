<?php
// Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — Laravel Livewire 3 (components/special-hybrids/variants/skeleton-to-table-hydrator/SkeletonToTableHydratorWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class SkeletonToTableHydratorWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-skeleton-to-table-hydrator">
            <h3>Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
