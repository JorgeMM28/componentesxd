<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFloatingActionDock(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock"><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span></div>
<script type="module">
import { mountFloatingActionDock } from '/assets/floating-action-dock.js';
document.querySelectorAll('[data-cxd-control="floating-action-dock"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFloatingActionDock(root); });
</script>
HTML; }
