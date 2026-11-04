<?php
// Variante 08 — Toaster Interactivo de Subida de Archivos — Laravel Livewire 3 (components/toasts/variants/upload-progress-toaster/UploadProgressToasterWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class UploadProgressToasterWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-upload-progress-toaster">
            <h3>Variante 08 — Toaster Interactivo de Subida de Archivos</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
