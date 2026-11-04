<script lang="ts">
import { mountDeployConsole } from './deploy-console.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDeployConsole(node) }; }
</script>
<div class="cxd-special" data-cxd-control="deploy-console" use:control><h3>Consola de despliegues</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Desplegar versión</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Consola restaurada</span></div>
