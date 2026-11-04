{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="search-grid-2d-ripple"><h3>Buscador de nodos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Propagar onda</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Matriz restaurada</span></div>
<script type="module">
import { mountSearchGrid2dRipple } from '/assets/search-grid-2d-ripple.js';
document.querySelectorAll('[data-cxd-control="search-grid-2d-ripple"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSearchGrid2dRipple(root); });
</script>
