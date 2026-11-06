<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderProductComparator(): string { return <<<'HTML'
<section class="cxd-special cxd-special--board" data-cxd-control="product-comparator"><header><small>COMPARADOR DE PRODUCTOS</small><h3>Comparador de productos</h3></header><p data-copy>Selección restaurada</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Starter</button><button type="button" data-item="1" aria-pressed="false">Studio</button><button type="button" data-item="2" aria-pressed="false">Enterprise</button></div><strong data-output>Starter</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Comparar selección</button><button type="button" data-reset>Restaurar</button></div><span role="status">Selección restaurada</span></section>
<script type="module">
import { mountProductComparator } from '/assets/product-comparator.js';
document.querySelectorAll('[data-cxd-control="product-comparator"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountProductComparator(root); });
</script>
HTML; }
