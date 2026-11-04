<?php
/**
 * ============================================================================
 * COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/badges-data/variants/avatar-presence-stack/AvatarPresenceStackRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\BadgesData;

final class AvatarPresenceStackRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '05. Collaborator Avatar Stack + Presence Ring'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'PRESENCE UI'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-badges-data-avatar-presence-stack" data-theme="{$theme}" data-variant="avatar-presence-stack">
            <header class="cxd-badges-data-avatar-presence-stack__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-badges-data-avatar-presence-stack__body">
                <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
            </div>
        </section>
        HTML;
    }
}
