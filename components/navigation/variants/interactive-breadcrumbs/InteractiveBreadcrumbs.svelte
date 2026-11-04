<script lang="ts">
import { mountInteractiveBreadcrumbs } from './interactive-breadcrumbs.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInteractiveBreadcrumbs(node) }; }
</script>
<div class="cxd-nav" data-cxd-control="interactive-breadcrumbs" use:control><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span></div>
