<?php
/**
 * ============================================================================
 * COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (PHP 8.3+ STANDALONE RENDERER)
 * Archivo: components/forms/variants/file-dropzone-inspector/FileDropzoneInspectorRenderer.php
 * ============================================================================
 */

declare(strict_types=1);

namespace ComponentesXD\Forms;

final class FileDropzoneInspectorRenderer
{
    public static function render(array $props = []): string
    {
        $title = htmlspecialchars((string) ($props['title'] ?? '07. Drag & Drop Artifact Dropzone'), ENT_QUOTES, 'UTF-8');
        $badge = htmlspecialchars((string) ($props['badge'] ?? 'FILE UPLOAD'), ENT_QUOTES, 'UTF-8');
        $theme = htmlspecialchars((string) ($props['theme'] ?? 'geist-dark'), ENT_QUOTES, 'UTF-8');

        return <<<HTML
        <section class="cxd-forms-file-dropzone-inspector" data-theme="{$theme}" data-variant="file-dropzone-inspector">
            <header class="cxd-forms-file-dropzone-inspector__header">
                <span>{$title}</span>
                <span class="cxd-badge">{$badge}</span>
            </header>
            <div class="cxd-forms-file-dropzone-inspector__body">
                <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
            </div>
        </section>
        HTML;
    }
}
