<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSlideDrawerInspector(): string { return <<<'HTML'
<div class="cxd-dialog cxd-dialog--drawer" data-cxd-control="slide-drawer-inspector"><button type="button" data-open>Abrir inspector</button><span role="status">Inspector cerrado</span><dialog aria-label="Inspector lateral"><h3>Inspector de recurso</h3><div class="cxd-dialog__actions"><button type="button" data-tab="details" aria-pressed="true">Propiedades</button><button type="button" data-tab="json" aria-pressed="false">JSON</button></div><p data-panel="details">Región: us-east-1 · Estado: activo</p><pre data-panel="json" hidden>&#123; "region": "us-east-1", "activo": true &#125;</pre><button type="button" data-close>Cerrar</button></dialog></div>
<script type="module">
import { mountSlideDrawerInspector } from '/assets/slide-drawer-inspector.js';
document.querySelectorAll('[data-cxd-control="slide-drawer-inspector"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSlideDrawerInspector(root); });
</script>
HTML; }
