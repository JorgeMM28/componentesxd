<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountUploadProgressToaster } from './upload-progress-toaster.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountUploadProgressToaster(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast" data-cxd-control="upload-progress-toaster" ref="root"><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span></div></template>
