{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-deploy" data-cxd-control="deploy-console"><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div class="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section>
<script type="module">
import { mountDeployConsole } from '/assets/deploy-console.js';
document.querySelectorAll('[data-cxd-control="deploy-console"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDeployConsole(root); });
</script>
