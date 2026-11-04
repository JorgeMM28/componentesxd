<?php
// Variante 05 — Generador Interactivo de Pila de Toasters — Laravel Livewire 3 (components/toasts/variants/stacker-spawner-toast/StackerSpawnerToastWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class StackerSpawnerToastWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-stacker-spawner-toast">
            <h3>Variante 05 — Generador Interactivo de Pila de Toasters</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
