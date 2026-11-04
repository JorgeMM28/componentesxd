<?php
/**
 * ============================================================================
 * COMPONENTESXD — 01. Enterprise Financial Ledger Grid (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/enterprise-ledger/EnterpriseLedgerRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class EnterpriseLedgerRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '01. Enterprise Financial Ledger Grid'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'FINTECH / LEDGER'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-enterprise-ledger" data-theme="{$theme}" data-variant="enterprise-ledger">
            <header class="cxd-tables-enterprise-ledger__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-enterprise-ledger__body">
                <p>Tabla contable e institucional con búsqueda instantánea, filtros de estado, barras de carga CPU, selección por lote y totales tabulares.</p>
            </div>
        </section>
        HTML;
    }
}
