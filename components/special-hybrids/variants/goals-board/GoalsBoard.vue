<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountGoalsBoard } from './goals-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountGoalsBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-goals" data-cxd-control="goals-board" ref="root"><header><small>OBJETIVOS · Q4</small><h3>Tablero de hitos</h3></header><div data-goals><label><input type="checkbox" checked /> Documentación</label><label><input type="checkbox" /> Onboarding</label><label><input type="checkbox" checked /> Accesibilidad</label></div><progress max="3" value="2" data-goal-progress></progress><footer><strong data-goal-count>2 / 3 completados</strong><button type="button" data-complete>Completar siguiente</button></footer><span role="status"></span></section></template>
