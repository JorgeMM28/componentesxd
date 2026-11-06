<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInventoryBoard } from './inventory-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInventoryBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="inventory-board" ref="root"><header><small>TABLERO DE INVENTARIO</small><h3>Tablero de inventario</h3></header><p data-copy>Inventario restaurado</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Cables USB-C</button><button type="button" data-item="1" aria-pressed="false">Adaptadores</button><button type="button" data-item="2" aria-pressed="false">Soportes</button></div><strong data-output>Cables USB-C</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Reabastecer ítem</button><button type="button" data-reset>Restaurar</button></div><span role="status">Inventario restaurado</span></section></template>
