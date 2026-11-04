<?php
// Variante 03 — Tabla Content-Fit (Ajustada al Contenido) — Laravel Livewire 3 (components/tables/variants/content-fit-compact/ContentFitCompactWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class ContentFitCompactWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-content-fit-compact">
            <h3>Variante 03 — Tabla Content-Fit (Ajustada al Contenido)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
