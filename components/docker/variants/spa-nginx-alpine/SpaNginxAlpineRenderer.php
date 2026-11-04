<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderSpaNginxAlpine(): string { return <<<'HTML'
<section class="cxd-docker-flow" data-cxd-control="spa-nginx-alpine"><h3>SPA + Nginx</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Generar bundle Vite</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Resolver rutas con try_files</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Servir assets inmutables</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
<script type="module">
import { mountSpaNginxAlpine } from '/assets/spa-nginx-alpine.js';
document.querySelectorAll('[data-cxd-control="spa-nginx-alpine"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSpaNginxAlpine(root); });
</script>
HTML; }
