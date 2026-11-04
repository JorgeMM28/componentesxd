<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Multi-File Upload Progress Toaster (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/floating-upload-Dock/FloatingUploadDockWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class FloatingUploadDockWire extends Component
{
    public string $title = '07. Multi-File Upload Progress Toaster';
    public string $badge = 'UPLOAD MANAGER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'floating-upload-Dock');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-floating-upload-Dock" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-floating-upload-Dock__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-floating-upload-Dock__body">
                <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
