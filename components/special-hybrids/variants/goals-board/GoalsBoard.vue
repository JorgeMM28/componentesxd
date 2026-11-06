<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountGoalsBoard } from './goals-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountGoalsBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="goals-board" ref="root"><header><small>TABLERO DE OBJETIVOS</small><h3>Tablero de objetivos</h3></header><p data-copy>Objetivos restaurados</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Documentación</button><button type="button" data-item="1" aria-pressed="false">Onboarding</button><button type="button" data-item="2" aria-pressed="false">Accesibilidad</button></div><strong data-output>Documentación</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Completar hito</button><button type="button" data-reset>Restaurar</button></div><span role="status">Objetivos restaurados</span></section></template>
