<script lang="ts">
import { mountQueueSimulator } from './queue-simulator.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountQueueSimulator(node) }; }
</script>
<section class="cxd-special cxd-queue" data-cxd-control="queue-simulator" use:control><header><small>WORKER · 1 DISPONIBLE</small><h3>Simulador de cola</h3></header><ol data-queue><li>exportar-reporte</li><li>indexar-búsqueda</li><li>enviar-resumen</li></ol><div class="cxd-special__actions"><button type="button" data-process>Procesar siguiente</button><button type="button" data-reset>Restaurar cola</button></div><span role="status"></span></section>
