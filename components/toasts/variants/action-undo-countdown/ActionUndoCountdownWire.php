<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (LARAVEL LIVEWIRE 3)
 * Archivo: components/toasts/variants/action-undo-countdown/ActionUndoCountdownWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Toasts;

use Livewire\Component;

class ActionUndoCountdownWire extends Component
{
    public string $title = '03. Actionable Undo Toast + Progress Timer';
    public string $badge = 'UNDO / TIMER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'action-undo-countdown');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-toasts-action-undo-countdown" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-toasts-action-undo-countdown__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-toasts-action-undo-countdown__body">
                <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
