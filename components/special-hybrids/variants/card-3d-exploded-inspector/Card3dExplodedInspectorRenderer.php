<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderCard3dExplodedInspector(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="card-3d-exploded-inspector"><h3>Inspector de capas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Separar capas</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Tarjeta ensamblada</span></div>
<script type="module">
import { mountCard3dExplodedInspector } from '/assets/card-3d-exploded-inspector.js';
document.querySelectorAll('[data-cxd-control="card-3d-exploded-inspector"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCard3dExplodedInspector(root); });
</script>
HTML; }
