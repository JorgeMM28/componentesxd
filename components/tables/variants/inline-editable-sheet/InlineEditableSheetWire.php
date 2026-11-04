<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Inline Editable Data Sheet (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/inline-editable-sheet/InlineEditableSheetWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class InlineEditableSheetWire extends Component
{
    public string $title = '05. Inline Editable Data Sheet';
    public string $badge = 'SPREADSHEET UI';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'inline-editable-sheet');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-inline-editable-sheet" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-inline-editable-sheet__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-inline-editable-sheet__body">
                <p>Celdas editables directamente al hacer clic con resaltado de celda activa, validación instantánea y navegación por teclado.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
