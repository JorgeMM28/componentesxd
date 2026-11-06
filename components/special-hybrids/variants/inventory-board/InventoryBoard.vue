<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInventoryBoard } from './inventory-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInventoryBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-inventory" data-cxd-control="inventory-board" ref="root"><header><small>INVENTARIO</small><h3>Reabastecimiento</h3></header><table><thead><tr><th>Artículo</th><th>Unidades</th><th>Ajuste</th></tr></thead><tbody data-stock><tr data-item="Cables USB-C" data-qty="4"><td>Cables USB-C</td><td><output>4</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr><tr data-item="Adaptadores" data-qty="18"><td>Adaptadores</td><td><output>18</output></td><td><button type="button" data-delta="-1">−</button><button type="button" data-delta="1">+</button></td></tr></tbody></table><span role="status">2 artículos controlados.</span></section></template>
