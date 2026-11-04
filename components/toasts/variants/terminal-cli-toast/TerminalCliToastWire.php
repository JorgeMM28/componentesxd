<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/terminal-cli-toast/TerminalCliToastWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class TerminalCliToastWire extends Component
{
    public string $title = '04. CLI & Webhook Telemetry Toast';
    public string $badge = 'DEV / WEBHOOK';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'terminal-cli-toast');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-terminal-cli-toast" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-terminal-cli-toast__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-terminal-cli-toast__body">
                <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
