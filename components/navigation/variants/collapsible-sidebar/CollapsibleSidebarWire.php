<?php
// Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster — Laravel Livewire 3 (components/navigation/variants/collapsible-sidebar/CollapsibleSidebarWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class CollapsibleSidebarWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <nav class="cxd-navigation-collapsible-sidebar">
            <h3>Variante 07 — Sidebar Lateral Colapsable con Árbol de Proyectos y Estado de Clúster</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </nav>
        HTML;
    }
}
