{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-expenses" data-cxd-control="expense-monitor"><header><small>PRESUPUESTO · OCT</small><h3>Monitor de gastos</h3></header><div data-expenses><label>Infraestructura <input type="number" min="0" value="7200" /></label><label>Marketing <input type="number" min="0" value="3100" /></label><label>Operación <input type="number" min="0" value="2180" /></label></div><footer><strong data-total></strong><output data-remaining></output></footer><span role="status"></span></section>
<script type="module">
import { mountExpenseMonitor } from '/assets/expense-monitor.js';
document.querySelectorAll('[data-cxd-control="expense-monitor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountExpenseMonitor(root); });
</script>
