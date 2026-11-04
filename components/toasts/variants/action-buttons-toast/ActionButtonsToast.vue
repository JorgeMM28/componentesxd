<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountActionButtonsToast } from './action-buttons-toast.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountActionButtonsToast(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast" data-cxd-control="action-buttons-toast" ref="root"><strong>Solicitud de fusión en rama principal (#409)</strong><p role="status">¿Deseas aprobar y desplegar los cambios?</p><button type="button" data-action="Aprobado y desplegado">Aprobar</button><button type="button" data-action="Pospuesto por 1 hora">Posponer</button><button type="button" data-action="Operación deshecha">Deshacer</button></div></template>
