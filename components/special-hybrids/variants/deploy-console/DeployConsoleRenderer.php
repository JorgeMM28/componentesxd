<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderDeployConsole(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="deploy-console"><header><small>CONSOLA DE DESPLIEGUES</small><h3>Consola de despliegues</h3></header><p data-copy>Consola restaurada</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">build</button><button type="button" data-item="1" aria-pressed="false">test</button><button type="button" data-item="2" aria-pressed="false">publish</button></div><strong data-output>build</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Desplegar versión</button><button type="button" data-reset>Restaurar</button></div><span role="status">Consola restaurada</span></section>
<script type="module">
import { mountDeployConsole } from '/assets/deploy-console.js';
document.querySelectorAll('[data-cxd-control="deploy-console"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDeployConsole(root); });
</script>
HTML; }
