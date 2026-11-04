<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountGoalsBoard } from './goals-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountGoalsBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="goals-board" ref="root"><h3>Tablero de objetivos</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Completar hito</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Objetivos restaurados</span></div></template>
