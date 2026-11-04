<?php
// Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila — Laravel Livewire 3 (components/badges-data/variants/copyable-spec-grid/CopyableSpecGridWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class CopyableSpecGridWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-copyable-spec-grid">
            <h3>Variante 05 — Lista Clave-Valor con Copiado al Portapapeles por Fila</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
