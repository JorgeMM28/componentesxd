<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderTactileSwitchesSliders(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="tactile-switches-sliders"><label><input type="checkbox" checked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span></div>
<script type="module">
import { mountTactileSwitchesSliders } from '/assets/tactile-switches-sliders.js';
document.querySelectorAll('[data-cxd-control="tactile-switches-sliders"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountTactileSwitchesSliders(root); });
</script>
HTML; }
