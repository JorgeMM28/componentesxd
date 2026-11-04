{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="seat-map"><h3>Mapa de asientos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Reservar asiento</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Mapa restaurado</span></div>
<script type="module">
import { mountSeatMap } from '/assets/seat-map.js';
document.querySelectorAll('[data-cxd-control="seat-map"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSeatMap(root); });
</script>
