<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderOrderTracker(): string { return <<<'HTML'
<section class="cxd-special cxd-order" data-cxd-control="order-tracker"><header><small>PEDIDO #CX-2048</small><h3 data-order-title>Preparación</h3></header><ol data-stages><li>Pagado</li><li>Preparación</li><li>En ruta</li><li>Entregado</li></ol><div class="cxd-special__actions"><button type="button" data-next>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></section>
<script type="module">
import { mountOrderTracker } from '/assets/order-tracker.js';
document.querySelectorAll('[data-cxd-control="order-tracker"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountOrderTracker(root); });
</script>
HTML; }
