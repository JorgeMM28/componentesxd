<script lang="ts">
import { mountQueueSimulator } from './queue-simulator.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountQueueSimulator(node) }; }
</script>
<section class="cxd-special cxd-special--stages" data-cxd-control="queue-simulator" use:control><header><small>SIMULADOR DE COLAS</small><h3>Simulador de colas</h3></header><p data-copy>Cola restaurada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">exportar-reporte</button><button type="button" data-item="1" aria-pressed="false">indexar-búsqueda</button><button type="button" data-item="2" aria-pressed="false">enviar-resumen</button></div><strong data-output>exportar-reporte</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Procesar siguiente</button><button type="button" data-reset>Restaurar</button></div><span role="status">Cola restaurada</span></section>
