<script lang="ts">
import { mountAudioSynthSpectrumAnalyzer } from './audio-synth-spectrum-analyzer.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAudioSynthSpectrumAnalyzer(node) }; }
</script>
<div class="cxd-special" data-cxd-control="audio-synth-spectrum-analyzer" use:control><h3>Analizador de espectro</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Cambiar perfil</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Perfil base</span></div>
