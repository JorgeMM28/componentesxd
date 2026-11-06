<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSurveyBuilder } from './survey-builder.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSurveyBuilder(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="survey-builder" ref="root"><header><small>CONSTRUCTOR DE ENCUESTAS</small><h3>Constructor de encuestas</h3></header><p data-copy>Encuesta restaurada</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Búsqueda</button><button type="button" data-item="1" aria-pressed="false">Velocidad</button><button type="button" data-item="2" aria-pressed="false">Documentación</button></div><strong data-output>Búsqueda</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Añadir pregunta</button><button type="button" data-reset>Restaurar</button></div><span role="status">Encuesta restaurada</span></section></template>
