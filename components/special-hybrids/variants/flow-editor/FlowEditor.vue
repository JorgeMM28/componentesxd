<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFlowEditor } from './flow-editor.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFlowEditor(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-flow" data-cxd-control="flow-editor" ref="root"><header><small>WORKFLOW</small><h3>Editor de flujo</h3></header><ol data-flow><li data-node="Capturar lead">Capturar lead</li><li data-node="Validar datos">Validar datos</li><li data-node="Notificar equipo">Notificar equipo</li></ol><div class="cxd-special__actions"><button type="button" data-add>Añadir aprobación</button><button type="button" data-link>Conectar nodos</button></div><output data-flow-output>3 pasos · sin conexión activa</output><span role="status">Selecciona un paso para inspeccionarlo.</span></section></template>
