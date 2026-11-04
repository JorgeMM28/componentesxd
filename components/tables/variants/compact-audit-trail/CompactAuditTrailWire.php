<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Security Audit & Diff History Table (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/compact-audit-trail/CompactAuditTrailWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class CompactAuditTrailWire extends Component
{
    public string $title = '06. Security Audit & Diff History Table';
    public string $badge = 'SECURITY AUDIT';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'compact-audit-trail');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-compact-audit-trail" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-compact-audit-trail__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-compact-audit-trail__body">
                <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
