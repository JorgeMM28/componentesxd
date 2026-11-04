<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderContentFitKpiBadge(): string { return <<<'HTML'
<div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge"><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div>
<script type="module">
import { mountContentFitKpiBadge } from '/assets/content-fit-kpi-badge.js';
document.querySelectorAll('[data-cxd-control="content-fit-kpi-badge"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountContentFitKpiBadge(root); });
</script>
HTML; }
