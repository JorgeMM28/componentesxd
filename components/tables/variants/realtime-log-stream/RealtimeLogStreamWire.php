<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (LARAVEL LIVEWIRE 3)
 * Archivo: components/tables/variants/realtime-log-stream/RealtimeLogStreamWire.php
 * ============================================================================
 */

namespace App\Livewire\Cxd\Tables;

use Livewire\Component;

class RealtimeLogStreamWire extends Component
{
    public string $title = '03. Realtime Telemetry & Log Stream Table';
    public string $badge = 'NOC / STREAMING';
    public string $interfaceTheme = 'geist-dark';
    public string $status = 'operational';

    public function triggerAction(): void
    {
        $this->status = 'updated:' . now()->format('H:i:s');
        $this->dispatch('cxd-action', variant: 'realtime-log-stream');
    }

    public function render()
    {
        return <<<'HTML'
        <section class="cxd-tables-realtime-log-stream" data-theme="{{ $interfaceTheme }}">
            <header class="cxd-tables-realtime-log-stream__header">
                <span>{{ $title }}</span>
                <span class="cxd-badge">{{ $badge }} · {{ $status }}</span>
            </header>
            <div class="cxd-tables-realtime-log-stream__body">
                <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
                <button type="button" class="cxd-btn" wire:click="triggerAction">
                    Sincronizar con Livewire
                </button>
            </div>
        </section>
        HTML;
    }
}
