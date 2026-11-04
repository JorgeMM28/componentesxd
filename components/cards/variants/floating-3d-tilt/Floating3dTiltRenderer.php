<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderFloating3dTilt(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="floating-3d-tilt"><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div>
<script type="module">
import { mountFloating3dTilt } from '/assets/floating-3d-tilt.js';
document.querySelectorAll('[data-cxd-control="floating-3d-tilt"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFloating3dTilt(root); });
</script>
HTML; }
