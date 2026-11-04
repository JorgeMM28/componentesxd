{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="cyber-radar-threat-sonar"><h3>Radar táctico</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Interceptar objetivo</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Barrido reiniciado</span></div>
<script type="module">
import { mountCyberRadarThreatSonar } from '/assets/cyber-radar-threat-sonar.js';
document.querySelectorAll('[data-cxd-control="cyber-radar-threat-sonar"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCyberRadarThreatSonar(root); });
</script>
