<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderMailInbox(): string { return <<<'HTML'
<section class="cxd-special cxd-special--telemetry" data-cxd-control="mail-inbox"><header><small>BANDEJA DE CORREO</small><h3>Bandeja de correo</h3></header><p data-copy>Bandeja restaurada</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Propuesta</button><button type="button" data-item="1" aria-pressed="false">Informe</button><button type="button" data-item="2" aria-pressed="false">Invitación</button></div><strong data-output>Propuesta</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Archivar mensaje</button><button type="button" data-reset>Restaurar</button></div><span role="status">Bandeja restaurada</span></section>
<script type="module">
import { mountMailInbox } from '/assets/mail-inbox.js';
document.querySelectorAll('[data-cxd-control="mail-inbox"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountMailInbox(root); });
</script>
HTML; }
