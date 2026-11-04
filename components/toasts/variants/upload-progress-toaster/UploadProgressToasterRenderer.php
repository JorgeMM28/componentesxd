<?php
// Variante 08 — Toaster Interactivo de Subida de Archivos — PHP 8.3 Renderer (components/toasts/variants/upload-progress-toaster/UploadProgressToasterRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Toasts;

final class UploadProgressToasterRenderer {
    public static function render(): string {
        return '<div class="cxd-toasts-upload-progress-toaster"><h3>Variante 08 — Toaster Interactivo de Subida de Archivos</h3><p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p></div>';
    }
}
