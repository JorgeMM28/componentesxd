<?php
/**
 * ============================================================================
 * COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (LARAVEL LIVEWIRE 3)
 * Archivo: components/buttons/variants/industrial-offset-trigger/IndustrialOffsetTriggerWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Buttons;

use Livewire\Component;

class IndustrialOffsetTriggerWire extends Component
{
    public string $title = '08. Mechanical Hard-Offset Push Button';
    public string $badge = 'TACTILE PUSH';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'industrial-offset-trigger');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-buttons-industrial-offset-trigger" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-buttons-industrial-offset-trigger__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-buttons-industrial-offset-trigger__body">
                <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
