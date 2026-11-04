<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderIsometric3dCityCluster(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="isometric-3d-city-cluster"><h3>Clúster isométrico</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Distribuir carga</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Clúster restaurado</span></div>
<script type="module">
import { mountIsometric3dCityCluster } from '/assets/isometric-3d-city-cluster.js';
document.querySelectorAll('[data-cxd-control="isometric-3d-city-cluster"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountIsometric3dCityCluster(root); });
</script>
HTML; }
