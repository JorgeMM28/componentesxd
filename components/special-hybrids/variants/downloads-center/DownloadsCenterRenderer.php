<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderDownloadsCenter(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="downloads-center"><h3>Centro de descargas</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Iniciar descarga</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Descargas restauradas</span></div>
<script type="module">
import { mountDownloadsCenter } from '/assets/downloads-center.js';
document.querySelectorAll('[data-cxd-control="downloads-center"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDownloadsCenter(root); });
</script>
HTML; }
