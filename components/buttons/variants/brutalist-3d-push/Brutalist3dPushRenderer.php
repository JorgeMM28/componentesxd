<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderBrutalist3dPush(): string { return <<<'HTML'
<div class="cxd-mechanical" data-mechanical>
  <button type="button" class="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button>
  <button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button>
</div>
<script type="module">
import { mountBrutalist3dPush } from '/assets/brutalist-3d-push.js';
document.querySelectorAll('[data-mechanical]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountBrutalist3dPush(root); });
</script>
HTML; }
