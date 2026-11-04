<?php
/**
 * ============================================================================
 * COMPONENTESXD — 06. Security Audit & Diff History Table (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/tables/variants/compact-audit-trail/CompactAuditTrailRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Tables;

final class CompactAuditTrailRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '06. Security Audit & Diff History Table'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'SECURITY AUDIT'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-tables-compact-audit-trail" data-theme="{$theme}" data-variant="compact-audit-trail">
            <header class="cxd-tables-compact-audit-trail__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-tables-compact-audit-trail__body">
                <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
            </div>
        </section>
        HTML;
    }
}
