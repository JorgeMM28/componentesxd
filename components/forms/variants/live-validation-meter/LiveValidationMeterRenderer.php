<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderLiveValidationMeter(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="live-validation-meter"><label>Contraseña <input type="password" data-password autocomplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span></div>
<script type="module">
import { mountLiveValidationMeter } from '/assets/live-validation-meter.js';
document.querySelectorAll('[data-cxd-control="live-validation-meter"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountLiveValidationMeter(root); });
</script>
HTML; }
