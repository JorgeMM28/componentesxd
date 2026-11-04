<?php
// Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto — Laravel Livewire 3 (components/navigation/variants/interactive-breadcrumbs/InteractiveBreadcrumbsWire.php)
namespace App\Livewire\Cxd\Navigation;
use Livewire\Component;

class InteractiveBreadcrumbsWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-navigation-interactive-breadcrumbs">
            <h3>Variante 04 — Breadcrumbs Interactivos con Selector de Rama/Proyecto</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
