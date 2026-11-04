<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (LARAVEL LIVEWIRE 3)
 * Archivo: components/forms/variants/custom-command-select/CustomCommandSelectWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Forms;

use Livewire\Component;

class CustomCommandSelectWire extends Component
{
    public string $title = '03. Searchable Multi-Option Dropdown Select';
    public string $badge = 'CUSTOM SELECT';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'custom-command-select');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-forms-custom-command-select" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-forms-custom-command-select__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-forms-custom-command-select__body">
                <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
