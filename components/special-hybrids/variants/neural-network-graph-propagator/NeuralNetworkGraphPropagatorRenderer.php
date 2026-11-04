<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderNeuralNetworkGraphPropagator(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="neural-network-graph-propagator"><h3>Red neuronal</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Ejecutar inferencia</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Red preparada</span></div>
<script type="module">
import { mountNeuralNetworkGraphPropagator } from '/assets/neural-network-graph-propagator.js';
document.querySelectorAll('[data-cxd-control="neural-network-graph-propagator"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountNeuralNetworkGraphPropagator(root); });
</script>
HTML; }
