<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingFabRadial } from './floating-fab-radial.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingFabRadial(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-control" data-cxd-control="floating-fab-radial" ref="root"><button type="button" data-fab aria-expanded="true">Abrir / Cerrar menú flotante</button><span role="status">SATÉLITES ACTIVOS</span><div class="cxd-control__actions" data-actions><button type="button" data-action="Nuevo despliegue ejecutado">01. Nuevo despliegue</button><button type="button" data-action="Repositorio clonado">02. Clonar repositorio</button><button type="button" data-action="Logs exportados">03. Exportar logs</button></div></div></template>
