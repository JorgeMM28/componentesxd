<script lang="ts">
import { mountStylelessMinimalNav } from './styleless-minimal-nav.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStylelessMinimalNav(node) }; }
</script>
<div class="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav" use:control><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span></div>
