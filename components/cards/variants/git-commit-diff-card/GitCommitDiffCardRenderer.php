<?php
/**
 * ============================================================================
 * COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/cards/variants/git-commit-diff-card/GitCommitDiffCardRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Cards;

final class GitCommitDiffCardRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '04. Git Commit & Code Diff Inspection Card'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'VERSION CONTROL'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-cards-git-commit-diff-card" data-theme="{$theme}" data-variant="git-commit-diff-card">
            <header class="cxd-cards-git-commit-diff-card__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-cards-git-commit-diff-card__body">
                <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
            </div>
        </section>
        HTML;
    }
}
