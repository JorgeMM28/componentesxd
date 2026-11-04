<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStylelessEditorial } from './styleless-editorial.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStylelessEditorial(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card cxd-card--editorial" data-cxd-control="styleless-editorial" ref="root"><span>ENSAYO ARQUITECTÓNICO // Nº 04</span><h3>La eliminación del contenedor innecesario</h3><p>La jerarquía tipográfica y el espacio definen el bloque.</p><button type="button" data-read>Leer especificación</button><span role="status">Listo para explorar</span></div></template>
