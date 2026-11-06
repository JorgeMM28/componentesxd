<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderModalCommandChoreography(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="modal-command-choreography"><header><small>CONSOLA DE COMANDOS</small><h3>Consola de comandos</h3></header><p data-copy>Consola lista</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Deploy</button><button type="button" data-item="1" aria-pressed="false">Auditoría</button><button type="button" data-item="2" aria-pressed="false">Rollback</button></div><strong data-output>Deploy</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar comando</button><button type="button" data-reset>Restaurar</button></div><span role="status">Consola lista</span></section>
<script type="module">
import { mountModalCommandChoreography } from '/assets/modal-command-choreography.js';
document.querySelectorAll('[data-cxd-control="modal-command-choreography"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModalCommandChoreography(root); });
</script>
HTML; }
