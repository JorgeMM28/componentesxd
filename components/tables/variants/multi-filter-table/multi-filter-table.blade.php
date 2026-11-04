{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-table" data-cxd-control="multi-filter-table"><div class="cxd-table__toolbar"><label>Buscar <input type="search" data-search /></label><label>Departamento <select data-department><option value="">Todos</option><option>Arquitectura</option><option>Sistemas</option></select></label><label>Estado <select data-status><option value="">Todos</option><option>Online</option><option>Revisión</option></select></label></div><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr data-row data-department-value="Arquitectura" data-status-value="Online"><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr data-row data-department-value="Sistemas" data-status-value="Revisión"><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr></tbody></table><span role="status">2 resultados</span></div>
<script type="module">
import { mountMultiFilterTable } from '/assets/multi-filter-table.js';
document.querySelectorAll('[data-cxd-control="multi-filter-table"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMultiFilterTable(root); });
</script>
