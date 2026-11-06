<script lang="ts">
import { mountNeuralNetworkGraphPropagator } from './neural-network-graph-propagator.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountNeuralNetworkGraphPropagator(node) }; }
</script>
<section class="cxd-special cxd-special--stages" data-cxd-control="neural-network-graph-propagator" use:control><header><small>RED NEURONAL</small><h3>Red neuronal</h3></header><p data-copy>Red preparada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Input</button><button type="button" data-item="1" aria-pressed="false">Hidden</button><button type="button" data-item="2" aria-pressed="false">Softmax</button></div><strong data-output>Input</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar inferencia</button><button type="button" data-reset>Restaurar</button></div><span role="status">Red preparada</span></section>
