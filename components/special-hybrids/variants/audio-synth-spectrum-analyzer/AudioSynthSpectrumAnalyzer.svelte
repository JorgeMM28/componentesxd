<script lang="ts">
import { mountAudioSynthSpectrumAnalyzer } from './audio-synth-spectrum-analyzer.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAudioSynthSpectrumAnalyzer(node) }; }
</script>
<section class="cxd-special cxd-special--board" data-cxd-control="audio-synth-spectrum-analyzer" use:control><header><small>ANALIZADOR DE ESPECTRO</small><h3>Analizador de espectro</h3></header><p data-copy>Perfil base</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Cyberpunk</button><button type="button" data-item="1" aria-pressed="false">Sub-Bass</button><button type="button" data-item="2" aria-pressed="false">Harmonics</button></div><strong data-output>Cyberpunk</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Cambiar perfil</button><button type="button" data-reset>Restaurar</button></div><span role="status">Perfil base</span></section>
