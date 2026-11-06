{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--stages" data-cxd-control="neural-network-graph-propagator"><header><small>RED NEURONAL</small><h3>Red neuronal</h3></header><p data-copy>Red preparada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Input</button><button type="button" data-item="1" aria-pressed="false">Hidden</button><button type="button" data-item="2" aria-pressed="false">Softmax</button></div><strong data-output>Input</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar inferencia</button><button type="button" data-reset>Restaurar</button></div><span role="status">Red preparada</span></section>
<script type="module">
import { mountNeuralNetworkGraphPropagator } from '/assets/neural-network-graph-propagator.js';
document.querySelectorAll('[data-cxd-control="neural-network-graph-propagator"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountNeuralNetworkGraphPropagator(root); });
</script>
