<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInteractiveBreadcrumbs(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="interactive-breadcrumbs"><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span></div>
<script type="module">
import { mountInteractiveBreadcrumbs } from '/assets/interactive-breadcrumbs.js';
document.querySelectorAll('[data-cxd-control="interactive-breadcrumbs"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveBreadcrumbs(root); });
</script>
HTML; }
