<script lang="ts">
import { mountCyberRadarThreatSonar } from './cyber-radar-threat-sonar.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCyberRadarThreatSonar(node) }; }
</script>
<div class="cxd-special" data-cxd-control="cyber-radar-threat-sonar" use:control><h3>Radar táctico</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Interceptar objetivo</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Barrido reiniciado</span></div>
