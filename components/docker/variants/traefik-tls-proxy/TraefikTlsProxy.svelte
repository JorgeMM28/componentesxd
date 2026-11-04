<script lang="ts">
import { mountTraefikTlsProxy } from './traefik-tls-proxy.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountTraefikTlsProxy(node) }; }
</script>
<section class="cxd-docker-flow" data-cxd-control="traefik-tls-proxy" use:control><h3>Traefik TLS</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Resolver certificado ACME</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Balancear réplicas</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Publicar métricas</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
