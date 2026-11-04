<script lang="ts">
import { mountAstroNodeSsr } from './astro-node-ssr.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAstroNodeSsr(node) }; }
</script>
<section class="cxd-docker-flow" data-cxd-control="astro-node-ssr" use:control><h3>Astro / Node SSR</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Instalar dependencias</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Compilar rutas estáticas</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Arrancar runner sin root</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
