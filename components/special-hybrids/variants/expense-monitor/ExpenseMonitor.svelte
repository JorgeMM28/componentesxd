<script lang="ts">
import { mountExpenseMonitor } from './expense-monitor.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountExpenseMonitor(node) }; }
</script>
<div class="cxd-special" data-cxd-control="expense-monitor" use:control><h3>Monitor de gastos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Registrar gasto</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Presupuesto restaurado</span></div>
