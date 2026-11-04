<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderOrderTracker(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="order-tracker"><h3>Seguimiento de pedidos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Pedido restaurado</span></div>
<script type="module">
import { mountOrderTracker } from '/assets/order-tracker.js';
document.querySelectorAll('[data-cxd-control="order-tracker"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountOrderTracker(root); });
</script>
HTML; }
