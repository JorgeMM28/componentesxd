<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderOrderTracker(): string { return <<<'HTML'
<section class="cxd-special cxd-special--config" data-cxd-control="order-tracker"><header><small>SEGUIMIENTO DE PEDIDOS</small><h3>Seguimiento de pedidos</h3></header><p data-copy>Pedido restaurado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Pagado</button><button type="button" data-item="1" aria-pressed="false">Preparación</button><button type="button" data-item="2" aria-pressed="false">En ruta</button></div><strong data-output>Pagado</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Avanzar pedido</button><button type="button" data-reset>Restaurar</button></div><span role="status">Pedido restaurado</span></section>
<script type="module">
import { mountOrderTracker } from '/assets/order-tracker.js';
document.querySelectorAll('[data-cxd-control="order-tracker"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountOrderTracker(root); });
</script>
HTML; }
