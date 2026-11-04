<script lang="ts">
import { mountDockerLiveDeployTopology } from './docker-live-deploy-topology.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDockerLiveDeployTopology(node) }; }
</script>
<div class="cxd-special" data-cxd-control="docker-live-deploy-topology" use:control><h3>Topología de despliegue</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Enviar paquete</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Red en espera</span></div>
