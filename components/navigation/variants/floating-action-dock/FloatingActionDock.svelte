<script lang="ts">
import { mountFloatingActionDock } from './floating-action-dock.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingActionDock(node) }; }
</script>
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock" use:control><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span></div>
