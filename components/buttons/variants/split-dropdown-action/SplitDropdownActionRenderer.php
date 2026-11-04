<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSplitDropdownAction(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="split-dropdown-action"><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div>
<script type="module">
import { mountSplitDropdownAction } from '/assets/split-dropdown-action.js';
document.querySelectorAll('[data-cxd-control="split-dropdown-action"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSplitDropdownAction(root); });
</script>
HTML; }
