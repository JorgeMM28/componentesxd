{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-docker-flow" data-cxd-control="fullstack-compose-stack"><h3>Compose full-stack</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Esperar healthcheck de Postgres</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Conectar Redis</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Levantar aplicación</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
<script type="module">
import { mountFullstackComposeStack } from '/assets/fullstack-compose-stack.js';
document.querySelectorAll('[data-cxd-control="fullstack-compose-stack"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFullstackComposeStack(root); });
</script>
