<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountProductComparator } from './product-comparator.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountProductComparator(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-products" data-cxd-control="product-comparator" ref="root"><header><small>PLANES</small><h3 data-plan-title>Compara tus opciones</h3></header><div data-plans><label><input type="radio" name="plan" value="Starter · $19" checked /> Starter · $19</label><label><input type="radio" name="plan" value="Studio · $49" /> Studio · $49</label><label><input type="radio" name="plan" value="Enterprise · $99" /> Enterprise · $99</label></div><dl><dt>Usuarios</dt><dd data-users>3</dd><dt>Proyectos</dt><dd data-projects>5</dd></dl><span role="status">Starter seleccionado.</span></section></template>
