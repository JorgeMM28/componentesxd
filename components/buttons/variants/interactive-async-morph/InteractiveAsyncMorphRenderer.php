<?php
// Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — PHP 8.3 Renderer (components/buttons/variants/interactive-async-morph/InteractiveAsyncMorphRenderer.php)
declare(strict_types=1);
namespace ComponentesXD\Buttons;

final class InteractiveAsyncMorphRenderer {
    public static function render(): string {
        return '<div class="cxd-buttons-interactive-async-morph"><h3>Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)</h3><p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p></div>';
    }
}
