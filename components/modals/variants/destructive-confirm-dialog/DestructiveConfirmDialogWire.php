<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Critical Action Verification Modal (LARAVEL LIVEWIRE 3)
 * Archivo: components/modals/variants/destructive-confirm-dialog/DestructiveConfirmDialogWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Modals;

use Livewire\Component;

class DestructiveConfirmDialogWire extends Component
{
    public string $title = '03. Critical Action Verification Modal';
    public string $badge = 'SAFETY DIALOG';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'destructive-confirm-dialog');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-modals-destructive-confirm-dialog" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-modals-destructive-confirm-dialog__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-modals-destructive-confirm-dialog__body">
                <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
