<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFlowEditor(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="flow-editor"><header><small>EDITOR DE FLUJO</small><h3>Editor de flujo</h3></header><p data-copy>Flujo restaurado</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Formulario</button><button type="button" data-item="1" aria-pressed="false">Validar</button><button type="button" data-item="2" aria-pressed="false">Notificar</button></div><strong data-output>Formulario</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Conectar paso</button><button type="button" data-reset>Restaurar</button></div><span role="status">Flujo restaurado</span></section>
<script type="module">
import { mountFlowEditor } from '/assets/flow-editor.js';
document.querySelectorAll('[data-cxd-control="flow-editor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFlowEditor(root); });
</script>
HTML; }
