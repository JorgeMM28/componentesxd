<?php
// Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila) — Laravel Livewire 3 (components/tables/variants/crud-actions/CrudActionsWire.php)
namespace App\Livewire\Cxd\Tables;
use Livewire\Component;

class CrudActionsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-tables-crud-actions">
            <h3>Variante 06 — Tabla con Acciones (Duplicar, Estado y Eliminar Fila)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
