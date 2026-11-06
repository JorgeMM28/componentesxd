<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSurveyBuilder } from './survey-builder.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSurveyBuilder(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-survey" data-cxd-control="survey-builder" ref="root"><header><small>ENCUESTA</small><h3>Prioriza las preguntas</h3></header><ol data-questions><li>Experiencia de búsqueda <button type="button" data-up>↑</button></li><li>Velocidad de carga <button type="button" data-up>↑</button></li><li>Documentación <button type="button" data-up>↑</button></li></ol><button type="button" data-add>Añadir pregunta</button><span role="status">3 preguntas activas.</span></section></template>
