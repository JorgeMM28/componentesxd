{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-table" data-cxd-control="crud-actions"><button type="button" data-add>Agregar registro</button><table><thead><tr><th>Servicio</th><th>Estado</th><th>Acciones</th></tr></thead><tbody data-body><tr><td data-name>API</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr><tr><td data-name>Worker</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr></tbody></table><span role="status">2 registros</span></div>
<script type="module">
import { mountCrudActions } from '/assets/crud-actions.js';
document.querySelectorAll('[data-cxd-control="crud-actions"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCrudActions(root); });
</script>
