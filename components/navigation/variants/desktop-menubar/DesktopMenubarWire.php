<?php
// Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git) — Laravel Livewire 3 (components/navigation/variants/desktop-menubar/DesktopMenubarWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class DesktopMenubarWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <nav class="cxd-navigation-desktop-menubar">
            <h3>Variante 08 — Menubar Desktop Clásico con Menús Flotantes (Archivo, Edición, Git)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </nav>
        HTML;
    }
}
