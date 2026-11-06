{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--stages" data-cxd-control="permissions-panel"><header><small>PANEL DE PERMISOS</small><h3>Panel de permisos</h3></header><p data-copy>Permisos restaurados</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Editar</button><button type="button" data-item="1" aria-pressed="false">Publicar</button><button type="button" data-item="2" aria-pressed="false">Administrar</button></div><strong data-output>Editar</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Aplicar permiso</button><button type="button" data-reset>Restaurar</button></div><span role="status">Permisos restaurados</span></section>
<script type="module">
import { mountPermissionsPanel } from '/assets/permissions-panel.js';
document.querySelectorAll('[data-cxd-control="permissions-panel"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountPermissionsPanel(root); });
</script>
