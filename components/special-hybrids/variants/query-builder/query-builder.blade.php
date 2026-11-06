{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--stages" data-cxd-control="query-builder"><header><small>CONSTRUCTOR DE CONSULTAS</small><h3>Constructor de consultas</h3></header><p data-copy>Consulta restaurada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">estado = activo</button><button type="button" data-item="1" aria-pressed="false">región = MX</button><button type="button" data-item="2" aria-pressed="false">plan = pro</button></div><strong data-output>estado = activo</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar consulta</button><button type="button" data-reset>Restaurar</button></div><span role="status">Consulta restaurada</span></section>
<script type="module">
import { mountQueryBuilder } from '/assets/query-builder.js';
document.querySelectorAll('[data-cxd-control="query-builder"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountQueryBuilder(root); });
</script>
