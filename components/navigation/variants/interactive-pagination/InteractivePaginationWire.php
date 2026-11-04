<?php
// Variante 06 — Barra de Paginación Interactiva con Salto de Página — Laravel Livewire 3 (components/navigation/variants/interactive-pagination/InteractivePaginationWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class InteractivePaginationWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-interactive-pagination">
            <h3>Variante 06 — Barra de Paginación Interactiva con Salto de Página</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
