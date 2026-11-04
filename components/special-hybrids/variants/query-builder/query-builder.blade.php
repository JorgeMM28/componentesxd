{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="query-builder"><h3>Constructor de consultas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ejecutar consulta</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Consulta restaurada</span></div>
<script type="module">
import { mountQueryBuilder } from '/assets/query-builder.js';
document.querySelectorAll('[data-cxd-control="query-builder"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountQueryBuilder(root); });
</script>
