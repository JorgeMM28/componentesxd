<script lang="ts">
import { mountFilterSearchFacet } from './filter-search-facet.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFilterSearchFacet(node) }; }
</script>
<div class="cxd-form" data-cxd-control="filter-search-facet" use:control><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span></div>
