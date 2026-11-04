<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderModernRoundedBento(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="modern-rounded-bento"><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div>
<script type="module">
import { mountModernRoundedBento } from '/assets/modern-rounded-bento.js';
document.querySelectorAll('[data-cxd-control="modern-rounded-bento"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModernRoundedBento(root); });
</script>
HTML; }
