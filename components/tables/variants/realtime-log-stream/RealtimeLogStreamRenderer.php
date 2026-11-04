<?php
/**
 * ============================================================================
 * COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/realtime-log-stream/RealtimeLogStreamRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class RealtimeLogStreamRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '03. Realtime Telemetry & Log Stream Table'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'NOC / STREAMING'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-realtime-log-stream" data-theme="{$theme}" data-variant="realtime-log-stream">
            <header class="cxd-tables-realtime-log-stream__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-realtime-log-stream__body">
                <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
            </div>
        </section>
        HTML;
    }
}
