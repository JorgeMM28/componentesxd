<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Keyboard Shortcut Chord Display (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/keyboard-shortcut-matrix/KeyboardShortcutMatrixWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class KeyboardShortcutMatrixWire extends Component
{
    public string $title = '07. Keyboard Shortcut Chord Display';
    public string $badge = 'KBD CHORDS';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'keyboard-shortcut-matrix');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-keyboard-shortcut-matrix" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
                <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
