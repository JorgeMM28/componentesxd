<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFilterSearchFacet(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="filter-search-facet"><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span></div>
<script type="module">
import { mountFilterSearchFacet } from '/assets/filter-search-facet.js';
document.querySelectorAll('[data-cxd-control="filter-search-facet"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFilterSearchFacet(root); });
</script>
HTML; }
