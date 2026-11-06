{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-queue" data-cxd-control="queue-simulator"><header><small>WORKER · 1 DISPONIBLE</small><h3>Simulador de cola</h3></header><ol data-queue><li>exportar-reporte</li><li>indexar-búsqueda</li><li>enviar-resumen</li></ol><div class="cxd-special__actions"><button type="button" data-process>Procesar siguiente</button><button type="button" data-reset>Restaurar cola</button></div><span role="status"></span></section>
<script type="module">
import { mountQueueSimulator } from '/assets/queue-simulator.js';
document.querySelectorAll('[data-cxd-control="queue-simulator"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountQueueSimulator(root); });
</script>
