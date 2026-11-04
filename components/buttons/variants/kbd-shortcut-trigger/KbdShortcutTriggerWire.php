<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/kbd-shortcut-trigger/KbdShortcutTriggerWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class KbdShortcutTriggerWire extends Component
{
    public string $title = '06. Tactical KBD Shortcut Command Button';
    public string $badge = 'HOTKEY READY';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'kbd-shortcut-trigger');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-kbd-shortcut-trigger" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-kbd-shortcut-trigger__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-kbd-shortcut-trigger__body">
                <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
