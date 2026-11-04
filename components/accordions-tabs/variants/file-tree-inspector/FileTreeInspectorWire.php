<?php
// Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — Laravel Livewire 3 (components/accordions-tabs/variants/file-tree-inspector/FileTreeInspectorWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class FileTreeInspectorWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-file-tree-inspector">
            <h3>Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
