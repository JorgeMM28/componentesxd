<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFlowEditor } from './flow-editor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFlowEditor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="flow-editor" ref="root"><h3>Editor de flujo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Conectar paso</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Flujo restaurado</span></div></template>
