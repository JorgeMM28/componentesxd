<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountBrutalistLedger } from './brutalist-ledger.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountBrutalistLedger(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-table cxd-table--ledger" data-cxd-control="brutalist-ledger" ref="root"><table><thead><tr><th>LOTE</th><th>OPERACIÓN</th><th>IMPORTE NETO</th></tr></thead><tbody><tr><td>001</td><td>Liquidación</td><td>$420,000.00</td></tr><tr><td>002</td><td>Cobertura</td><td>$185,500.00</td></tr><tr><td>003</td><td>Custodia</td><td>$910,250.00</td></tr></tbody><tfoot><tr><th>TOTAL</th><td></td><td>$1,515,750.00</td></tr></tfoot></table></div></template>
