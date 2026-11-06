<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderServerMonitor(): string { return <<<'HTML'
<section class="cxd-special cxd-monitor" data-cxd-control="server-monitor"><header><small>NOC · SALUD</small><h3>Monitor de servidores</h3><button type="button" data-refresh>Actualizar</button></header><div data-metrics><label>API <meter min="0" max="100" value="98"></meter><b>98%</b></label><label>Worker <meter min="0" max="100" value="72"></meter><b>72%</b></label><label>Base de datos <meter min="0" max="100" value="64"></meter><b>64%</b></label></div><span role="status">Lectura estable.</span></section>
<script type="module">
import { mountServerMonitor } from '/assets/server-monitor.js';
document.querySelectorAll('[data-cxd-control="server-monitor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountServerMonitor(root); });
</script>
HTML; }
