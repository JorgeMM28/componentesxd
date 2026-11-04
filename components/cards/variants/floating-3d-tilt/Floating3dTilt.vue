<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloating3dTilt } from './floating-3d-tilt.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloating3dTilt(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card" data-cxd-control="floating-3d-tilt" ref="root"><span>PERSPECTIVA 3D</span><h3>Mueve el cursor sobre esta tarjeta</h3><p>La perspectiva responde a la posición del puntero.</p></div></template>
