<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCollapsibleSidebar(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--sidebar" data-cxd-control="collapsible-sidebar"><button type="button" data-collapse aria-label="Colapsar navegación" aria-expanded="true">☰ <span data-label>Colapsar</span></button><label>Entorno <select data-env><option>Producción</option><option>Staging</option></select></label><button type="button" data-destination="Resumen" aria-label="Resumen" aria-pressed="true">◉ <span data-label>Resumen</span></button><button type="button" data-destination="Despliegues" aria-label="Despliegues" aria-pressed="false">▦ <span data-label>Despliegues</span></button><button type="button" data-destination="Seguridad" aria-label="Seguridad" aria-pressed="false">◇ <span data-label>Seguridad</span></button><span role="status">Vista activa: Resumen</span></div>
<script type="module">
import { mountCollapsibleSidebar } from '/assets/collapsible-sidebar.js';
document.querySelectorAll('[data-cxd-control="collapsible-sidebar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCollapsibleSidebar(root); });
</script>
HTML; }
