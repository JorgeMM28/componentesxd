<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Split Primary + Context Dropdown Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/split-action-menu/SplitActionMenuWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class SplitActionMenuWire extends Component
{
    public string $title = '05. Split Primary + Context Dropdown Button';
    public string $badge = 'SPLIT ACTION';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'split-action-menu');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-split-action-menu" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-split-action-menu__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-split-action-menu__body">
                <p>Combina la ejecución principal inmediata con un selector desplegable de opciones secundarias (Deploy / Dry-run).</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
