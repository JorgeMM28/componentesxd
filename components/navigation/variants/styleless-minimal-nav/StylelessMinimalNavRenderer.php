<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderStylelessMinimalNav(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav"><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span></div>
<script type="module">
import { mountStylelessMinimalNav } from '/assets/styleless-minimal-nav.js';
document.querySelectorAll('[data-cxd-control="styleless-minimal-nav"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountStylelessMinimalNav(root); });
</script>
HTML; }
