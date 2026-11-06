<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFlowEditor(): string { return <<<'HTML'
<section class="cxd-special cxd-flow" data-cxd-control="flow-editor"><header><small>WORKFLOW</small><h3>Editor de flujo</h3></header><ol data-flow><li data-node="Capturar lead">Capturar lead</li><li data-node="Validar datos">Validar datos</li><li data-node="Notificar equipo">Notificar equipo</li></ol><div class="cxd-special__actions"><button type="button" data-add>Añadir aprobación</button><button type="button" data-link>Conectar nodos</button></div><output data-flow-output>3 pasos · sin conexión activa</output><span role="status">Selecciona un paso para inspeccionarlo.</span></section>
<script type="module">
import { mountFlowEditor } from '/assets/flow-editor.js';
document.querySelectorAll('[data-cxd-control="flow-editor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFlowEditor(root); });
</script>
HTML; }
