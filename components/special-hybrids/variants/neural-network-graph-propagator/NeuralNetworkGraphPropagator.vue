<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountNeuralNetworkGraphPropagator } from './neural-network-graph-propagator.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountNeuralNetworkGraphPropagator(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="neural-network-graph-propagator" ref="root"><header><small>RED NEURONAL</small><h3>Red neuronal</h3></header><p data-copy>Red preparada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Input</button><button type="button" data-item="1" aria-pressed="false">Hidden</button><button type="button" data-item="2" aria-pressed="false">Softmax</button></div><strong data-output>Input</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar inferencia</button><button type="button" data-reset>Restaurar</button></div><span role="status">Red preparada</span></section></template>
