<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCard3dExplodedInspector(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="card-3d-exploded-inspector"><header><small>INSPECTOR DE CAPAS</small><h3>Inspector de capas</h3></header><p data-copy>Tarjeta ensamblada</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Tokens</button><button type="button" data-item="1" aria-pressed="false">Componente</button><button type="button" data-item="2" aria-pressed="false">Motor</button></div><strong data-output>Tokens</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Separar capas</button><button type="button" data-reset>Restaurar</button></div><span role="status">Tarjeta ensamblada</span></section>
<script type="module">
import { mountCard3dExplodedInspector } from '/assets/card-3d-exploded-inspector.js';
document.querySelectorAll('[data-cxd-control="card-3d-exploded-inspector"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCard3dExplodedInspector(root); });
</script>
HTML; }
