<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInteractiveCmdkPalette(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="interactive-cmdk-palette"><button type="button" data-open>Abrir comandos</button><span role="status">Selecciona un comando</span><dialog aria-label="Paleta de comandos"><h3>Paleta de comandos</h3><label>Buscar <input type="search" data-search placeholder="Escribe un comando" /></label><div class="cxd-dialog__list"><button type="button" data-command="Abrir catálogo">Abrir catálogo</button><button type="button" data-command="Ver animaciones">Ver animaciones</button><button type="button" data-command="Cambiar interfaz">Cambiar interfaz</button></div><button type="button" data-close>Cerrar</button></dialog></div>
<script type="module">
import { mountInteractiveCmdkPalette } from '/assets/interactive-cmdk-palette.js';
document.querySelectorAll('[data-cxd-control="interactive-cmdk-palette"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveCmdkPalette(root); });
</script>
HTML; }
