{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="modal-command-choreography"><h3>Consola de comandos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ejecutar comando</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Consola lista</span></div>
<script type="module">
import { mountModalCommandChoreography } from '/assets/modal-command-choreography.js';
document.querySelectorAll('[data-cxd-control="modal-command-choreography"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountModalCommandChoreography(root); });
</script>
