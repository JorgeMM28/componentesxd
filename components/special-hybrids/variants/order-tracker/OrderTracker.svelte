<script lang="ts">
import { mountOrderTracker } from './order-tracker.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountOrderTracker(node) }; }
</script>
<section class="cxd-special cxd-order" data-cxd-control="order-tracker" use:control><header><small>PEDIDO #CX-2048</small><h3 data-order-title>Preparación</h3></header><ol data-stages><li>Pagado</li><li>Preparación</li><li>En ruta</li><li>Entregado</li></ol><div class="cxd-special__actions"><button type="button" data-next>Avanzar pedido</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></section>
