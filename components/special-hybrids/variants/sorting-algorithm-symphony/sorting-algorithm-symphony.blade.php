{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="sorting-algorithm-symphony"><h3>Sinfonía de ordenamiento</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ordenar columnas</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Valores mezclados</span></div>
<script type="module">
import { mountSortingAlgorithmSymphony } from '/assets/sorting-algorithm-symphony.js';
document.querySelectorAll('[data-cxd-control="sorting-algorithm-symphony"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSortingAlgorithmSymphony(root); });
</script>
