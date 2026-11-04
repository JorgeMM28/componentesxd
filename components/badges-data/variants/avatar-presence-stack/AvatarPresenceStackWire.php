<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (LARAVEL LIVEWIRE 3)
 * Archivo: components/badges-data/variants/avatar-presence-stack/AvatarPresenceStackWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\BadgesData;

use Livewire\Component;

class AvatarPresenceStackWire extends Component
{
    public string $title = '05. Collaborator Avatar Stack + Presence Ring';
    public string $badge = 'PRESENCE UI';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'avatar-presence-stack');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-badges-data-avatar-presence-stack" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-badges-data-avatar-presence-stack__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-badges-data-avatar-presence-stack__body">
                <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
