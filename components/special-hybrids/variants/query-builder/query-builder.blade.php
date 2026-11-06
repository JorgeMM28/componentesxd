{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-query" data-cxd-control="query-builder"><header><small>CONSULTA VISUAL</small><h3>Filtros de clientes</h3></header><fieldset data-filters><label><input type="checkbox" value="estado = 'activo'" checked /> Activos</label><label><input type="checkbox" value="plan = 'pro'" /> Plan Pro</label><label><input type="checkbox" value="pais = 'MX'" /> México</label></fieldset><pre data-sql></pre><button type="button" data-copy>Preparar consulta</button><span role="status"></span></section>
<script type="module">
import { mountQueryBuilder } from '/assets/query-builder.js';
document.querySelectorAll('[data-cxd-control="query-builder"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountQueryBuilder(root); });
</script>
