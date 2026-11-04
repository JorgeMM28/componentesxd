<?php
// Variante 04 — Toaster con Formulario de Respuesta Rápida — Laravel Livewire 3 (components/toasts/variants/form-reply-toast/FormReplyToastWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class FormReplyToastWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-form-reply-toast">
            <h3>Variante 04 — Toaster con Formulario de Respuesta Rápida</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
