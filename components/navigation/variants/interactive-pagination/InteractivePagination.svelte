<script lang="ts">
import { mountInteractivePagination } from './interactive-pagination.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractivePagination(node) }; }
</script>
<div class="cxd-nav" data-cxd-control="interactive-pagination" use:control><button type="button" data-step="-1">Anterior</button><button type="button" data-page="1" aria-current="page">1</button><button type="button" data-page="2">2</button><button type="button" data-page="3">3</button><button type="button" data-step="1">Siguiente</button><span role="status">Página 1 de 3</span></div>
