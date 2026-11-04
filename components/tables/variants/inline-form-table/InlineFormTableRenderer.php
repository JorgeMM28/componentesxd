<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderInlineFormTable(): string { return <<<'HTML'
<div class="cxd-table" data-cxd-control="inline-form-table"><table><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead><tbody><tr data-row><td>Nodos</td><td><input type="number" data-quantity min="0" value="2" aria-label="Cantidad nodos" /></td><td><select data-price aria-label="Precio nodos"><option value="20">$20</option><option value="40">$40</option></select></td><td data-subtotal>$40.00</td></tr><tr data-row><td>Almacenamiento</td><td><input type="number" data-quantity min="0" value="3" aria-label="Cantidad almacenamiento" /></td><td><select data-price aria-label="Precio almacenamiento"><option value="10">$10</option><option value="30">$30</option></select></td><td data-subtotal>$30.00</td></tr></tbody></table><span role="status">Total: $70.00</span></div>
<script type="module">
import { mountInlineFormTable } from '/assets/inline-form-table.js';
document.querySelectorAll('[data-cxd-control="inline-form-table"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInlineFormTable(root); });
</script>
HTML; }
