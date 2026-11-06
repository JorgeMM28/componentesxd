<script lang="ts">
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountOrderTracker(node) }; }
</script>
<section class="cxd-special cxd-special--config" data-cxd-control="order-tracker" use:control><header><small>SEGUIMIENTO DE PEDIDOS</small><h3>Seguimiento de pedidos</h3></header><p data-copy>Pedido restaurado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Pagado</button><button type="button" data-item="1" aria-pressed="false">Preparación</button><button type="button" data-item="2" aria-pressed="false">En ruta</button></div><strong data-output>Pagado</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Avanzar pedido</button><button type="button" data-reset>Restaurar</button></div><span role="status">Pedido restaurado</span></section>
