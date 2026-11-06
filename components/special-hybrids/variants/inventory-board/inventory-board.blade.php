{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-inventory" data-cxd-control="inventory-board"><header><small>INVENTARIO</small><h3>Reabastecimiento</h3></header><table><thead><tr><th>Artículo</th><th>Unidades</th><th>Ajuste</th></tr></thead><tbody data-stock><tr data-item="Cables USB-C" data-qty="4"><td>Cables USB-C</td><td><output>4</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr><tr data-item="Adaptadores" data-qty="18"><td>Adaptadores</td><td><output>18</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr></tbody></table><span role="status">2 artículos controlados.</span></section>
<script type="module">
import { mountInventoryBoard } from '/assets/inventory-board.js';
document.querySelectorAll('[data-cxd-control="inventory-board"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInventoryBoard(root); });
</script>
