<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Enterprise Financial Ledger Grid (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/enterprise-ledger/EnterpriseLedgerWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class EnterpriseLedgerWire extends Component
{
    public string $title = '01. Enterprise Financial Ledger Grid';
    public string $badge = 'FINTECH / LEDGER';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'enterprise-ledger');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-enterprise-ledger" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-enterprise-ledger__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-enterprise-ledger__body">
                <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
