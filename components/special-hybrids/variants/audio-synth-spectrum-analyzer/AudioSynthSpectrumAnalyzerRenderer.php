<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderAudioSynthSpectrumAnalyzer(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="audio-synth-spectrum-analyzer"><h3>Analizador de espectro</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Cambiar perfil</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Perfil base</span></div>
<script type="module">
import { mountAudioSynthSpectrumAnalyzer } from '/assets/audio-synth-spectrum-analyzer.js';
document.querySelectorAll('[data-cxd-control="audio-synth-spectrum-analyzer"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAudioSynthSpectrumAnalyzer(root); });
</script>
HTML; }
