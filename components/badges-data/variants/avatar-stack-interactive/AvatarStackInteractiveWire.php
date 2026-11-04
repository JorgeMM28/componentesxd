<?php
// Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario — Laravel Livewire 3 (components/badges-data/variants/avatar-stack-interactive/AvatarStackInteractiveWire.php)
namespace App\Livewire\Cxd\BadgesData;
use Livewire\Component;

class AvatarStackInteractiveWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-badges-data-avatar-stack-interactive">
            <h3>Variante 06 — Grupo de Avatares Flotantes con Inspector de Usuario</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
