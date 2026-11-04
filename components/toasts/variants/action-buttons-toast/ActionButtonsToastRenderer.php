<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderActionButtonsToast(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="action-buttons-toast"><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button></div>
<script type="module">
import { mountActionButtonsToast } from '/assets/action-buttons-toast.js';
document.querySelectorAll('[data-cxd-control="action-buttons-toast"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountActionButtonsToast(root); });
</script>
HTML; }
