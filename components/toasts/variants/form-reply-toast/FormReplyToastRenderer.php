<?php
// Variante 04 — Toaster con Formulario de Respuesta Rápida — PHP 8.3 Renderer (components/toasts/variants/form-reply-toast/FormReplyToastRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Toasts;

final class FormReplyToastRenderer {
    public static function render(): string {
        return '<div class="cxd-toasts-form-reply-toast"><h3>Variante 04 — Toaster con Formulario de Respuesta Rápida</h3><p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p></div>';
    }
}
