<?php
// Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar) — Laravel Livewire 3 (components/cards/variants/action-toolbar-card/ActionToolbarCardWire.php)
namespace App\Livewire\Cxd\Cards;
use Livewire\Component;

class ActionToolbarCardWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-cards-action-toolbar-card">
            <h3>Variante 05 — Tarjeta con Barra de Acciones (Favorito, Compartir, Archivar)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
