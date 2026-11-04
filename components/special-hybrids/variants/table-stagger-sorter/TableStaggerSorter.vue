<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTableStaggerSorter } from './table-stagger-sorter.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTableStaggerSorter(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="table-stagger-sorter" ref="root"><h3>Telemetría ordenable</h3><div class="cxd-special__actions"><label>Ordenar por <select data-sort><option value="name">Nombre</option><option value="latency">Latencia</option><option value="load">Carga</option></select></label><button type="button" data-direction>Orden ascendente</button></div><table><thead><tr><th>Nodo</th><th>Latencia</th><th>Carga</th></tr></thead><tbody data-rows><tr data-name="Alfa" data-latency="42" data-load="68"><td>Alfa</td><td>42 ms</td><td>68% <span class="cxd-special__bar" data-bar="68"></span></td></tr><tr data-name="Beta" data-latency="18" data-load="35"><td>Beta</td><td>18 ms</td><td>35% <span class="cxd-special__bar" data-bar="35"></span></td></tr><tr data-name="Gamma" data-latency="76" data-load="91"><td>Gamma</td><td>76 ms</td><td>91% <span class="cxd-special__bar" data-bar="91"></span></td></tr></tbody></table><span role="status"></span></div></template>
