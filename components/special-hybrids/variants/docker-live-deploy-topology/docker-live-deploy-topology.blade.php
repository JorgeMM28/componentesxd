{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="docker-live-deploy-topology"><h3>Topología de despliegue</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Enviar paquete</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Red en espera</span></div>
<script type="module">
import { mountDockerLiveDeployTopology } from '/assets/docker-live-deploy-topology.js';
document.querySelectorAll('[data-cxd-control="docker-live-deploy-topology"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDockerLiveDeployTopology(root); });
</script>
