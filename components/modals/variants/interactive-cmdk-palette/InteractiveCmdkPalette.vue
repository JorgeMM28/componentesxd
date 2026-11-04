<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractiveCmdkPalette } from './interactive-cmdk-palette.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractiveCmdkPalette(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-dialog" data-cxd-control="interactive-cmdk-palette" ref="root"><button type="button" data-open>Abrir comandos</button><span role="status">Selecciona un comando</span><dialog aria-label="Paleta de comandos"><h3>Paleta de comandos</h3><label>Buscar <input type="search" data-search placeholder="Escribe un comando" /></label><div class="cxd-dialog__list"><button type="button" data-command="Abrir catálogo">Abrir catálogo</button><button type="button" data-command="Ver animaciones">Ver animaciones</button><button type="button" data-command="Cambiar interfaz">Cambiar interfaz</button></div><button type="button" data-close>Cerrar</button></dialog></div></template>
