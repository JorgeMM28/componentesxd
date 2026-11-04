<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountKanbanMiniBoard } from './kanban-mini-board.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountKanbanMiniBoard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="kanban-mini-board" ref="root"><div class="cxd-widget__columns"><div class="cxd-widget__list" data-backlog><strong>Pendiente</strong><div data-task>Revisar tokens <button type="button" data-move>Avanzar →</button></div></div><div class="cxd-widget__list" data-done><strong>Producción</strong></div></div><span role="status">Mueve una tarea</span></div></template>
