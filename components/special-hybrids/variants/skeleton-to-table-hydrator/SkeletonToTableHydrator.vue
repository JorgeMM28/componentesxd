<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSkeletonToTableHydrator } from './skeleton-to-table-hydrator.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSkeletonToTableHydrator(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--board" data-cxd-control="skeleton-to-table-hydrator" ref="root"><header><small>HIDRATADOR DE DATOS</small><h3>Hidratador de datos</h3></header><p data-copy>Skeleton restaurado</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">nodo-alfa</button><button type="button" data-item="1" aria-pressed="false">nodo-beta</button><button type="button" data-item="2" aria-pressed="false">nodo-gamma</button></div><strong data-output>nodo-alfa</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Hidratar tabla</button><button type="button" data-reset>Restaurar</button></div><span role="status">Skeleton restaurado</span></section></template>
