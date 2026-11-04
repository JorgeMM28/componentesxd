<script lang="ts">
import { mountBunMicroservice } from './bun-microservice.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountBunMicroservice(node) }; }
</script>
<section class="cxd-docker-flow" data-cxd-control="bun-microservice" use:control><h3>Microservicio Bun</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Resolver lockfile</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Ejecutar TypeScript nativo</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Exponer endpoint HTTP</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
