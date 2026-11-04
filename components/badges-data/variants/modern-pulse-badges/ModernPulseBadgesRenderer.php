<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderModernPulseBadges(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="modern-pulse-badges"><span class="cxd-data__tag">OPERATIONAL</span><span class="cxd-data__tag">DEGRADED</span><span class="cxd-data__tag">OUTAGE</span><button type="button" data-tag>astro-5 ×</button><button type="button" data-tag>animejs-v4 ×</button><button type="button" data-tag>typescript ×</button><button type="button" data-restore>Restaurar etiquetas</button><span role="status">3 etiquetas activas</span></div>
<script type="module">
import { mountModernPulseBadges } from '/assets/modern-pulse-badges.js';
document.querySelectorAll('[data-cxd-control="modern-pulse-badges"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernPulseBadges(root); });
</script>
HTML; }
