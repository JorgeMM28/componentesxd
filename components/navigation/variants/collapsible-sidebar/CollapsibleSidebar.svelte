<script lang="ts">
import { mountCollapsibleSidebar } from './collapsible-sidebar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCollapsibleSidebar(node) }; }
</script>
<div class="cxd-nav cxd-nav--sidebar" data-cxd-control="collapsible-sidebar" use:control><button type="button" data-collapse aria-label="Colapsar navegación" aria-expanded="true">☰ <span data-label>Colapsar</span></button><label>Entorno <select data-env><option>Producción</option><option>Staging</option></select></label><button type="button" data-destination="Resumen" aria-label="Resumen" aria-pressed="true">◉ <span data-label>Resumen</span></button><button type="button" data-destination="Despliegues" aria-label="Despliegues" aria-pressed="false">▦ <span data-label>Despliegues</span></button><button type="button" data-destination="Seguridad" aria-label="Seguridad" aria-pressed="false">◇ <span data-label>Seguridad</span></button><span role="status">Vista activa: Resumen</span></div>
