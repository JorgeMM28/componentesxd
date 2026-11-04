<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSkeletonToTableHydrator(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="skeleton-to-table-hydrator"><h3>Hidratador de datos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Hidratar tabla</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Skeleton restaurado</span></div>
<script type="module">
import { mountSkeletonToTableHydrator } from '/assets/skeleton-to-table-hydrator.js';
document.querySelectorAll('[data-cxd-control="skeleton-to-table-hydrator"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSkeletonToTableHydrator(root); });
</script>
HTML; }
