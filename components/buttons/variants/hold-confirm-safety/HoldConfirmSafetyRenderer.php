<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderHoldConfirmSafety(): string { return <<<'HTML'
<div class="cxd-control" data-cxd-control="hold-confirm-safety"><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div>
<script type="module">
import { mountHoldConfirmSafety } from '/assets/hold-confirm-safety.js';
document.querySelectorAll('[data-cxd-control="hold-confirm-safety"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountHoldConfirmSafety(root); });
</script>
HTML; }
