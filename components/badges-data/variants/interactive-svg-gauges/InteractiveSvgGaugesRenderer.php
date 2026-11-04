<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInteractiveSvgGauges(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="interactive-svg-gauges"><div class="cxd-data__gauge" data-gauge><strong data-value>84%</strong></div><label>Ajustar porcentaje <input type="range" min="0" max="100" value="84" data-slider /></label><button type="button" data-set="45">45%</button><button type="button" data-set="78">78%</button><button type="button" data-set="99">99%</button><span role="status">SLA global: 84%</span></div>
<script type="module">
import { mountInteractiveSvgGauges } from '/assets/interactive-svg-gauges.js';
document.querySelectorAll('[data-cxd-control="interactive-svg-gauges"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveSvgGauges(root); });
</script>
HTML; }
