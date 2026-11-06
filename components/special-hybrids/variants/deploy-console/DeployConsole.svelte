<script lang="ts">
import { mountDeployConsole } from './deploy-console.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDeployConsole(node) }; }
</script>
<section class="cxd-special cxd-deploy" data-cxd-control="deploy-console" use:control><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div class="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section>
